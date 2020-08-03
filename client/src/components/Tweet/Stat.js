import React from "react";

const Stat = ({ num, type }) => {
  return (
    <span style={{ marginRight: "15px", color: "rgb(101, 119, 134)" }}>
      <strong style={{ color: "black" }}>{num}</strong> {type}
      {num > 1 && "s"}
    </span>
  );
};
export default Stat;
