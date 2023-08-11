import React, { useState } from 'react'
import '../styles/layouts/Header.scss'

import logo_icon from "../assets/logo.svg";
import arrow_down_icon from "../assets/ChevronDown.svg";
import menu_icon from "../assets/Menubar.svg";
import close_btn from "../assets/CloseButton.svg"

function Header() {
    const [navActive, setNavActive] = useState(false);
  return (
    <React.Fragment>
        <header>
            <div className="logo_wrapper">
                <img src={logo_icon} alt="" />
                <h1>SlickInvest</h1>
            </div>

            <img onClick={() => setNavActive(true)} className={navActive ? "hamburger_icon active" : "hamburger_icon"} src={menu_icon} alt="" />
            
            <img onClick={
               () => setNavActive(false)
            } className={navActive ? "close_btn_icon active" : "close_btn_icon"} src={close_btn} alt="" />
              
            <nav className={navActive ? 'active': ""}>
                <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Partners</li>
                    <li>Wallet <img src={arrow_down_icon} alt="" /></li>
                </ul>
                
                <div className="btn_wrapper">
                    <button className="signin_btn">Login In</button>
                    <button className="sign_up_btn">Sign Up</button>
                </div>
            </nav>

            
        </header>
    </React.Fragment>
  )
}

export default Header