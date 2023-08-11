import React from 'react';
import '../styles/layouts/Footer.scss';
import { useInView } from 'react-intersection-observer';

import FooterLogo from '../assets/FooterLogo.svg';
import TwitterIcon from '../assets/TwitterIcon.svg';
import FacebookIcon from '../assets/FacebookIcon.svg';
import GithubIcon from '../assets/GithubIcon.svg';
import InstagramIcon from '../assets/TwitterIcon.svg';
import arrow_down_icon from "../assets/ChevronDownBlack.svg";

function Footer() {
    const { ref: myFooterRef, inView: myFooterIsVisible } = useInView()       
  return (
    <React.Fragment>
          <footer ref={myFooterRef} className={() => {
              if (myFooterIsVisible) { return 'show' }
          }}>
            <div className="first_section">
                <div className="logo">
                    <img className='logo_icon' src={FooterLogo} alt="" />
                    <span>SlickInvest</span>
                </div>
                
                <div className="nav_bar">
                    <ul>
                        <li>About</li>
                        <li>Features</li>
                        <li>Partners</li>
                        <li>Wallet <img src={arrow_down_icon} alt="" /></li>
                    </ul>
                </div>
                
                <div className="social_icon">
                    <a href="#"><img src={TwitterIcon} alt="" /></a>
                    <a href="#"><img src={FacebookIcon} alt="" /></a>
                    <a href="#"><img src={InstagramIcon} alt="" /></a>
                    <a href="#"><img src={GithubIcon} alt="" /></a>
                </div>
            </div>
            <hr />
            <div className="second_section">
                <div className="copyright">
                    <span>Copyright © 2023 SlickInvest</span>
                </div>
                
                <div className="rights_policy">
                      <span className='rights'>All Rights Reserved</span>
                      <a href=""> | Terms and Conditions</a>
                      <a href=""> | Privacy Policy</a>
                </div>
            </div>

        </footer>
    </React.Fragment>
  )
}

export default Footer