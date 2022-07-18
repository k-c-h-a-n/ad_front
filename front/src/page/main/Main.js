import styled from "styled-components";
import GlobalStyle from "../../components/common/GlobalStyle";
import { AppBar, Toolbar, Typography, Divider } from "@material-ui/core";
//import Grids from "./Grids";
import * as S from "./style";

const Main = () => {
    return (
        <GlobalStyle title="Dashboard">
            <S.Container>
                <S.ListBox>
                    <S.Text>List</S.Text>
                </S.ListBox>
            </S.Container>
            <S.Container>
                <S.ManageBox>
                    <S.Text>Manage</S.Text>
                </S.ManageBox>
            </S.Container>
            <S.Container>
                <S.EditBox>
                    <S.Text>Edit</S.Text>
                </S.EditBox>
            </S.Container>
            <S.Container>
                <S.SettingBox>
                    <S.Text>Setting</S.Text>
                </S.SettingBox>
            </S.Container>
        </GlobalStyle>
    )
}

export default Main;