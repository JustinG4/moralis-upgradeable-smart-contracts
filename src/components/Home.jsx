import React from "react";
import { Card, Typography, Button } from "antd";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi } from "../contracts/ERC1155CustomUpgradeableV1.json";
import Divider from '@material-ui/core/Divider';
import Form from 'components/Form';

export default function QuickStart() {
  const { account } = useMoralis();
  const { runContractFunction, isLoading } = useWeb3Contract({
    functionName: "mint",
    abi,
    contractAddress: "0xc44a27657627A89D522F98c04C9Fa820484Af46A",
    params: {
      account,
      id: 0,
      amount: 1,
    },
  });


  return (
    <div style={{ display: "flex" }}>
      <Form />
    </div>
  );
}
