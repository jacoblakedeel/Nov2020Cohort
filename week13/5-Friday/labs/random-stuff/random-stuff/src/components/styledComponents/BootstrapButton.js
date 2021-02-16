import React from "react";
import {Button} from 'react-bootstrap';
import styled from 'styled-components';


const FullWidthButton = styled(Button)`
    width: 100%

`





const BootstrapButton = () => {
  return <>
          <FullWidthButton type="button" class="btn btn-info">Info</FullWidthButton>

  </>;
};

export default BootstrapButton;
