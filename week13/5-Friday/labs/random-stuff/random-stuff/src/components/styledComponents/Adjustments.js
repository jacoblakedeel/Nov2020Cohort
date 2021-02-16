import React from "react";
import styled from 'styled-components';



const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const StripedLi = styled.li`

color: teal;

${props =>{
  if(props.even){
    return `
    color: fuschia;
    background-color: black;
    `
  }
}}

`

const Adjustments = (props) => {
  return <>

    {days.map((day, i) =>{
      return <StripedLi even={(i+1)%2 === 0}>{day}</StripedLi>
    })}
  
  
  </>;
};

export default Adjustments;
