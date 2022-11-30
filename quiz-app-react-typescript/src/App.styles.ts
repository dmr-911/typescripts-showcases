import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore
import BGIMAGE from './images/bg.jpg';

export const GlobalStyle = createGlobalStyle`
    html{
        height : 100%
    }
    body{
        background-image : url(${BGIMAGE});
        background-size : cover;
        margin : 0;
        padding : 0 20px;
        display : flex;
        justify-content : center;

    }
    *{
        box-sizing : border-box;
        font-family : 'Catamaran', sans-serif;
    }
`