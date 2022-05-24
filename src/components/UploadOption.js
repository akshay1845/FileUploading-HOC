import React, { useEffect, useState } from "react";
import "./uploadoption.scss";
const UploadOption = (props) => {
  const [data, setData] = useState({});
  let image = [];

  // let akshay = URL.createObjectURL("C:\\fakepath\\linkedin.png")

  const handleInputChange = (val) => {
    setData(val.target.files[0]);
  };

  let handleUploadOption;
  handleUploadOption = () => {
    image.push(data);
    console.log("image", image);
  };
  return (
    <div className="container">
      <div className="box">
        <div className="card">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleUploadOption();
            }}
          >
            <label htmlFor="myfile">
              <h2>Add Your File Here</h2>
            </label>
            <br />
            <br />
            <input
              type="file"
              id="myfile"
              onChange={(val) => {
                val.preventDefault();
                handleInputChange(val);
              }}
            />
            <br />
            <br />
            <button type="submit" id="upload">
              Upload
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadOption;
