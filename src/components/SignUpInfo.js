import React from "react";
import Button from '@mui/material/Button';
import { useState, useEffect, setState } from "react";



function SignUpInfo({ formData, setFormData }) {


  const handleRandom = async () => {
    formData.byRandom = true;
    formData.byImage = false;
    formData.formTitles = ["Choose Your Minting Option", "How It Works...", "Generating", "Meet Your CryptoPooch"];  
    console.log(formData);
  }

  const handleImage = async () => {
    formData.byImage = true;
    formData.byRandom = false;
    formData.formTitles = ["Choose Your Minting Option", "How It Works...", "Upload Your Pooch", "Meet Your CryptoPooch", "Adopt or Release?"];  
    console.log(formData);
  }

  return (
    <div className="generationOption">
      
      <div className="random">
        <Button variant="outlined"
          onClick={handleRandom}        >
          {/* <img src="./img/google.png" alt="By Random"/> */}
          <div className="randomImg">A</div>
        </Button>
      </div>

      <div className="image">
        <Button variant="outlined"
          onClick={handleImage}
        >
          {/* <img src="./Users/justingreenfield/Documents/GitHub/Pooch/src/assets/random.jpg" alt="By Image"/> */}
          <div className="imageImg">B</div>
        </Button>
      </div>

    </div>
  );
}

export default SignUpInfo;
