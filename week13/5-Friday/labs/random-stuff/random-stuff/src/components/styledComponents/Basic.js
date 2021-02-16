import React from "react";
import styled, {keyframes} from 'styled-components';


const move = keyframes`

  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(100%)
  }

`



const Heading1 = styled.h1`
  animation: ${move} 8s ease infinite;
  color: fuschia;
`



const Basic = () => {
  return <>

    <div>
      <Heading1>HEll</Heading1>
    </div>


  </>;
};

export default Basic;
