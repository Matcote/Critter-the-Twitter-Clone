import React from "react";
import styled, { keyframes } from "styled-components";

const pop = keyframes`
    from {
        transform: scale(0);
        
    }
    to {
        transform: scale(1);
        
    }
`;
const fade = keyframes`
    from {
        
        opacity: 1;
    }
    to {
        
        opacity:0;
    }
`;
const Wrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  animation: ${pop} 500ms forwards, ${fade} 700ms forwards;
`;

const PoppingCircle = ({ size, color }) => {
  return (
    <Wrapper style={{ height: size, width: size, backgroundColor: color }} />
  );
};

export default PoppingCircle;
