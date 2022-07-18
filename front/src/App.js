import logo from './logo.svg';
import './App.css';
import { useHistory, BrowserRouter as Router, Routes, Switch, Route } from "react-router-dom";

import GlobalStyle from './components/common/GlobalStyle.js';
import { useMediaQuery } from 'react-responsive'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import Main from './page/main/Main';
import Login from './page/login/Login';
import Edit from './page/edit/Edit';
import Manage from './page/manage/Manage';
import List from './page/list/List';

function App() {

  //const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1224 })
  //const isBigScreen = useMediaQuery({ minDeviceWidth: 1824 })
  //const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  //const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  //const isPortrait = useMediaQuery({ orientation: 'portrait' })
  //const isRetina = useMediaQuery({ minResolution: '2dppx' })

  return (
    <Router>
      {/*<GlobalStyle></GlobalStyle>*/}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/list" element={<List />} />

      </Routes>
    </Router>
  );
}

export default App;
