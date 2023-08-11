import React from 'react'
import '../../styles/LandingPage/ReasonSection.scss';
import { useInView } from 'react-intersection-observer';

import GlobeIcon from '../../assets/GlobeIcon.svg'
import LighteningIcon from '../../assets/LighteningIcon.svg'
import PhoneIcon from '../../assets/PhoneIcon.svg'
import HandLoveIcon from '../../assets/HandLoveIcon.svg'
import ReasonFigure from '../../assets/ReasonFigure.png'


function ReasonSection() {
    const { ref: myReasonRef, inView: myReasonFeatureIsVisible } = useInView()

  return (
    <React.Fragment>
        <section ref={myReasonRef} className={myReasonFeatureIsVisible ? "reason sects show": "reason sects"}>
            <div className="left_container">
                <h2>Why Do You Have To Choose And Use SlickInvest</h2>
                <div className="wrapper">
                    <div className="card">
                        <img className='icon' src={GlobeIcon} alt="" />
                        <h3>Cross-border transaction</h3>
                        <p>Make transactions around the world quicker and easier</p>
                    </div>
                    
                    <div className="card">
                        <img className='icon' src={LighteningIcon} alt="" />
                        <h3>Fast and easy transactions</h3>
                        <p>SlickInvest prioritizes the satisfaction of our users. Try SlickInvest now</p>
                    </div>
                    
                    <div className="card">
                        <img className='icon' src={PhoneIcon} alt="" />
                        <h3>24 hours satisfaction</h3>
                        <p>We are 24 hours available to help you. We are there for you</p>
                    </div>
                    
                    <div className="card">
                        <img className='icon' src={HandLoveIcon} alt="" />
                        <h3>Your satisfaction is our priority</h3>
                        <p>We always put the happiness of our users first</p>
                    </div>
                </div>
            </div>
            
            <figure className="right_container">
                <img src={ReasonFigure} alt="" />
            </figure>
        </section>
    </React.Fragment>
  )
}

export default ReasonSection