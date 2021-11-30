import React from "react";

const BorderedDiv = (props) => {
  const borderColor = props.color ? props.color : "grey";
  return (
    <div
      style={{
        border: `5px solid ${borderColor}`,
        margin: "10px",
        padding: "5px",
      }}
    >
      {/* JSX GOES HERE */}
      {props.children}
    </div>
  );
};

export default BorderedDiv;