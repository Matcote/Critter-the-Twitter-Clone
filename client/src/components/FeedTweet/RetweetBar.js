import React from "react";
import styled from "styled-components";
import TweetActionIcon from "./TweetActionIcon";

const RetweetBar = ({ retweetFrom }) => {
  return (
    <Wrapper>
      <TweetActionIcon kind="retweet" style={{ width: "20px" }} size={18} />
      <span>{retweetFrom.displayName} Remeowed</span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: rgb(101, 119, 134);
  height: 25px;
  padding: 10px 0 4px 35px;
  font-size: small;
  display: flex;
  align-items: center;
  span {
    margin-left: 3px;
  }
`;
export default RetweetBar;
