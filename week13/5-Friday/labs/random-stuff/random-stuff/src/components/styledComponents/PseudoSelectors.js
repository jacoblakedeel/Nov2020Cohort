import React from "react";
import styled from 'styled-components';



const HoverButton = styled.button`

padding: 8px 12px;
border: 0px;
background-color: black;
color: white;

`

const PseudoSelectors = () => {
  return <>
    <HoverButton>Kill Me</HoverButton>
  </>;
};

export default PseudoSelectors;
