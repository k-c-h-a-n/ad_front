import styled, { createGlobalStyle } from "styled-components";

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import TopBar from "../TopBar.js";

const GlobalStyle = () => {
  return (
    <GlobalStyle_Container>
    <BrowserView>
      <TopBar></TopBar>
      this is browser
    </BrowserView>
    <MobileView>
      <TopBar></TopBar>
      this is mobile
    </MobileView>
  </GlobalStyle_Container>
  )
}

export const GlobalStyle_Container = styled.div`
  position: absolute;
  background: #1b1b1d;
  place-items: center;
  width: 100%;
  height: 100%;
  color: white;
`;

export default GlobalStyle;