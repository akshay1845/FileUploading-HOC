import React, { useEffect, useState } from "react";
import "./uploadoption.scss";
const UploadOption = (props) => {
  let image = [];

    let akshay = URL.createObjectURL("C:\\fakepath\\linkedin.png")

  let handleUploadOption;

  useEffect(() => {
    handleUploadOption = (e) => {
      console.log(e);
    //   image.push(e.target[0].value);
    //   console.log(image.length, "data");
    };
  }, [image]);

  return (
    <div className="container">
      <div className="card">
        {image.length > 0 &&
          image.map((ele) => {
            <div className="image">
              {/* <img src={ele} alt="image" /> */}
              akdhdgydgweucgg COOL
            </div>;
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
      <img src="C:\\fakepath\\linkedin.png" alt="image"></img>
    </div>
  );
};

export default UploadOption;
