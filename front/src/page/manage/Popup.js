import React, { useState } from 'react';
import * as S from "./style";

const Popup = (props) => {
    console.log("pop2");
    const { onClose } = props;
    return (
        <S.Popup>
        <div className="popWrap">
            <div className="popBox">
                <div>
                	팝업 컨텐츠는 여기에
                </div>
                <div className="btnWrap">
                    <div className="btn" onClick={() => { onClose(false) }}>
                        닫기
                    </div>
                </div>
            </div>
        </div>
        </S.Popup>
    )
}
export default Popup;