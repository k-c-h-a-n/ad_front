import React, {useState,useEffect} from "react";
import GlobalStyle from "../../components/common/GlobalStyle";
import Popup from './Popup';
import Switch from '@mui/material/Switch';
import * as S from "./style";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Manage = () => {

    const [ popup, setPopup ] = useState(true); 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <GlobalStyle title="Manage">
            <S.Container>
                <S.TitleInfo>
                    <S.Title>Information User</S.Title>
                    <S.Switch><Switch {...label} defaultChecked color="secondary" /></S.Switch>
                </S.TitleInfo>
                <S.InfoCategory>
                    Age, Gender, Region, Interests
                </S.InfoCategory>
                <S.UsingPeriod>
                    7/18/22 ~ 7/17/23
                </S.UsingPeriod>
            </S.Container>
            <S.Container>
                <S.TitleInfo>
                    <S.Title>Information User</S.Title>
                    <S.Switch><Switch {...label} defaultChecked color="secondary" /></S.Switch>
                </S.TitleInfo>
                <S.InfoCategory>
                    Gender, Region, Interests
                </S.InfoCategory>
                <S.UsingPeriod>
                    8/15/22 ~ 9/15/22
                </S.UsingPeriod>
            </S.Container>
        </GlobalStyle>
    )
}

export default Manage;