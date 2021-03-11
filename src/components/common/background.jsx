import React from 'react';

import styled from "styled-components";
import background from "../../assets/summary-bg.jpg";

export const BackGround = styled.div`
background: url(${background});
display: block;
position: fixed;
top:0;
left: 0;
right: 0;
width: 100%;
height: 100%;
z-index: -1;
background-repeat: no-repeat;
background-size: cover;
`