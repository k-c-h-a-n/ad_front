import GlobalStyle from "../../components/common/GlobalStyle";
import Switch from '@mui/material/Switch';
import * as S from "./style";

const List = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return (
        <GlobalStyle title="List">
            <S.Container>
                <S.TitleInfo>
                    <S.Title>Information User</S.Title>
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

export default List;