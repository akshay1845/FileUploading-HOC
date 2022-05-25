import React, { useState } from "react";
import UploadOption from "../UploadOption";
import "./addOption.scss";

const AddOption = ({ props }) => {
  const [option, setOption] = useState(0);

  const handleAddOption = () => {
    setOption(option++);
    console.log("option", option);
  };

  return (
    <div className="addOptionContainer container">
      <div className="box">
        <UploadOption />
        <UploadOption />
        <UploadOption />
        <UploadOption />
        <UploadOption />
        <UploadOption />
        <div className="card">
          <button
            className="btn btn-primary customButton"
            onClick={() => handleAddOption()}
          >
            +<span className="spanTag">Add Image File Here</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddOption;
