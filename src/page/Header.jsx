import { useState } from 'react';
import '../css/index.css';
import {Link } from 'react-router-dom';
function Header(){
    let [count,setCout]=useState(0)
    return(
        <>
            <div className="header_wrapper">
                <div></div>
                <div className="logo"><Link to="/"><img src="https://yogibo.kr/web/img/icon/web_logo.svg" alt="" /></Link></div>
                <div className="login_in_out">
                    <ul>
                        <li>회원가입</li>
                        <li>로그인</li>
                        <li>장바구니<span className="icon_button">{count}</span></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header