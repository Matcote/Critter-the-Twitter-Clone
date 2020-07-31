import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
from {
transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const Spinner = () => {
  return (
    <Wrapper>
      <Wrapper2 />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 580px;
  padding: 16px;
  text-align: left;
  display: flex;
  justify-content: center;
`;
const Wrapper2 = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 800ms ease;
  animation-iteration-count: 4;
`;
export default Spinner;
