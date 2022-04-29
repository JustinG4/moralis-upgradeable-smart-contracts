import React from "react";
import Button from '@mui/material/Button';
import { useMoralis, useWeb3Contract, useWeb3Transfer } from "react-moralis";
import Typography from '@mui/material/Typography';


function PersonalInfo({ formData, setFormData }) {

  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading, user , authenticate} =
    useMoralis();

  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "native",
    amount: 0,
    receiver: "0x0000000000000000000000000000000000000000",
  });

  return (
    <div className="personal-info-container">
      <div className="howto">
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
          voluptate velit.
        </Typography>
      </div>
      <Button
        onClick={() => fetch()} disabled={isFetching}
      >
        Continue & Generate
      </Button>
      {/* <input
        type="text"
        placeholder="First Name..."
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Last Name..."
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Username..."
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      /> */}
    </div>
  );
}

export default PersonalInfo;
