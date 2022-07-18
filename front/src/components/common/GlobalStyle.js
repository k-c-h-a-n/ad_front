import styled, { createGlobalStyle } from "styled-components";

import {
  BrowserView,
  MobileView,
} from "react-device-detect";

import TopBar from "../TopBar.js";

const GlobalStyle = ({children, title}) => {
  return (
    <GlobalStyle_Container>
      <BrowserView>
        <TopBar header={title}></TopBar>
        {children}
      </BrowserView>
      <MobileView>
        <TopBar></TopBar>
        {children}
      </MobileView>
    </GlobalStyle_Container>
  )
}

export const GlobalStyle_Container = styled.div`
  position: absolute;
  background: #1b1b1d;
  place-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: white;
`;

export default GlobalStyle;