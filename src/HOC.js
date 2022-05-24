import React, { useState } from "react";

const HOC = (WrappedComponent) => {
  const HOC = (props) => {
    const [fileData, setFileData] = useState([]);   

    return (
      <div>
        <WrappedComponent />
      </div>
    );
  };

  return HOC;
};

export default HOC;
        