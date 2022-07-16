import styled from "styled-components";

import "./style.css";
import SideBar from "./Sidebar";

import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
  } from "react-device-detect";

const TopBar = () => {
    return (
        <>
            <TopbarContainer>
                <TopbarTitle>
                    tentative
                    <Title_Right>
                        <BrowserView>
                        </BrowserView>
                    </Title_Right>
                    <MobileView>
                      
                    </MobileView>
                </TopbarTitle>
            </TopbarContainer>  
            <div id={"Topbar"}>
                <SideBar pageWrapId={"page-wrap"} outerContainerId={"Topbar"} />
            </div>
        </>
    )
}

export const TopbarContainer = styled.div`
  background: linear-gradient( 90deg, #7b3fe4 20%, #9b23ea 80%);
  place-items: center;
  display:grid;
  width: 100%;
  color: white;
`;

export const TopbarTitle = styled.div`
  place-items: center;
  display:grid;
  color: white;
  font-size: 2rem;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const Title_Right = styled.div`
  place-items: right;
  color: white;
  font-size: 2rem;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default TopBar;