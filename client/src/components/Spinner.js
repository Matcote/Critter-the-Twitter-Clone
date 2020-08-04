import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styled, { keyframes } from "styled-components";
import Error from "./Error";

const spin = keyframes`
from {
transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;

const Spinner = () => {
  let [errorOccur, setErrorOccur] = React.useState(false);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setErrorOccur(true);
    }, 3000);
    return () => {
      clearTimeout(timer);
      setErrorOccur(false);
    };
  }, []);
  return (
    <Wrapper id="spinner">{errorOccur === true ? <Error /> : <Spin />}</Wrapper>
  );
};

const Wrapper = styled.div`
  width: 580px;
  padding: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
`;
const Spin = styled(AiOutlineLoading3Quarters)`
  animation: ${spin} 800ms ease;
  animation-iteration-count: 4;
`;
export default Spinner;
