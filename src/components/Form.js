import React, { useState, useEffect } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Button from '@mui/material/Button';

function Form() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    byRandom: false,
    byImage: false,
    walletAddress: "",
    imageURL: "",
    formTitles: ["Choose Your Minting Option", "How It Works..."],
  });

  const FormTitles = formData.formTitles;


  const PageDisplay = () => {
    if (page == 0) {
      console.log(formData)
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else if (page == 1) {
      return <PersonalInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const Next = () => {
    
  }

  return (
    <div className="form">
      {/* <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div> */}
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          <button
            disabled={page == 0}
            onClick={() => setPage((currPage) => currPage - 1)}
          >
            Prev
          </button>
          <button
            onClick={() => {
              if (page === FormTitles.length - 1) {
                alert("FORM SUBMITTED");
                console.log(formData);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          >
            {page === FormTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
