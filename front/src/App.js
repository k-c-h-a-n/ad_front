import logo from './logo.svg';
import './App.css';
import { useHistory, BrowserRouter as Router, Switch, Route } from "react-router-dom";

import GlobalStyle from './components/common/GlobalStyle.js';
import { useMediaQuery } from 'react-responsive'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

function App() {

  //const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  //const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  //const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  //const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  //const isPortrait = useMediaQuery({ orientation: 'portrait' })
  //const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
    <Router>
      <GlobalStyle></GlobalStyle>
    </Router>
  );
}

export default App;
