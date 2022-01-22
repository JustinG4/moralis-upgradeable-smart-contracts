const { expect } = require("chai");
const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");
const ERC1155CustomUpgradeableV1 = artifacts.require(
  "ERC1155CustomUpgradeableV1"
);
const ERC1155CustomUpgradeableV2 = artifacts.require(
  "ERC1155CustomUpgradeableV2"
);

// Start test block
contract("ERC1155CustomUpgradeableV2 (Proxy)", (accounts) => {
  beforeEach(async () => {
    // Deploy a new Box contract for each test
    this.existing = await deployProxy(ERC1155CustomUpgradeableV1, [], {
      kind: "uups",
      from: accounts[0],
    });
    this.erc1155Instance = await upgradeProxy(
      this.existing.address,
      ERC1155CustomUpgradeableV2,
      {
        kind: "uups",
        from: accounts[0],
      }
    );
  });

  it("should mint the correct base URI", async () => {
    expect((await this.erc1155Instance.uri(0)).toString()).to.equal(
      "https://ipfs.moralis.io:2053/ipfs/QmRsFtxBbdm88dGmp2abYVukiT4Qdoi1G3q31KYBoWD9Lr/metadata/{id}.json"
    );
  });

  it("should mint 2 NFT with tokenId 0", async () => {
    await this.erc1155Instance.mint(accounts[1], 0, 1);
    expect(
      (await this.erc1155Instance.balanceOf(accounts[1], 0)).toString()
    ).to.equal("2");
  });
});
