import React from 'react'
import '../../styles/LandingPage/FourthSection.scss';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import MaskAvatarGroup from '../../assets/MaskAvatarGroup.png';

function FourthSection() {
  return (
    <React.Fragment>
        <section className="fourth_section sects">
            <h2>Join 15+ million people who already trust us with their money</h2>
            <div className="container">
                <figure>
                    <img src={MaskAvatarGroup} alt="" />
                </figure>
                
                <div className="right_container">
                    <p>Experience the freedom of hassle-free money transfers with our free transfer admin finance app. Say goodbye to unnecessary fees and enjoy seamless transactions.</p>
                    <div className="wrapper">
                          <span>John timothy</span>
                          <div className="arrow_wrapper">
                              <img src={arrowLeft} alt="" />
                              <img src={arrowRight} className='arrow_right' alt="" />
                          </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default FourthSection