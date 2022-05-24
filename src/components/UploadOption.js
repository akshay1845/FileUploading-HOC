import React, { useEffect, useState } from "react";
import "./uploadoption.scss";
const UploadOption = (props) => {
  let image = [];

  // let akshay = URL.createObjectURL("C:\\fakepath\\linkedin.png")

  let handleUploadOption;

  useEffect(() => {
    handleUploadOption = (e) => {
      image.push(e.target[0].value);
      console.log("array", image);
      console.log(image.length, "data");
    };
  }, [image]);

  return (
    <div className="container">
      <div className="card">
        {
          image?.map((ele, key) => {
            return (
              <div className="image" key={key}>
                {/* <img src={ele} alt="image" /> */}
                file Uploaded {ele}
              </div>
            );
          })}
  
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleUploadOption(e);
          }}
        >
          <label htmlFor="myfile">
            <h2>Add Your File Here</h2>
          </label>
          <br />
          <br />
          <input type="file" id="myfile" />
          <br />
          <br />
          <button type="submit" id="upload">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadOption;
