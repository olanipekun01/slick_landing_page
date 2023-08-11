import React, {useEffect, useState} from 'react'
import Header from '../../layouts/Header'

import '../../styles/LandingPage/FirstSection.scss'

import coloredStar from '../../assets/coloredstar.svg';
import star from '../../assets/star.svg';
import ellipse_1 from '../../assets/Ellipse_3.svg';
import ellipse_2 from '../../assets/Ellipse_4.svg';
import ellipse_3 from '../../assets/Ellipse_5.svg';
import ellipse_42 from '../../assets/Ellipse_42.png';
import ellipse_6 from '../../assets/Ellipse_6.png';
import mini_image_1 from '../../assets/1.svg';
import mini_image_2 from '../../assets/2.svg';
import avatar from '../../assets/avatarImage.png';
import Companies from './Companies';

function FirstSection(props) {
    
  return (
    <React.Fragment>
        <section ref={props.myRef} className={props.visible ? "first_section sects show" : "first_section sects"}>
            <Header/>
            
            <div className="section_content_wrapper">
                <div className="content_container">
                <h1>LET SOME ELEGANCE INTO YOUR FINANCE</h1>
                <p>
                    Simplify your financial journey with us. Join today and
                    experience hassle-free banking experience.
                </p>
                
                <div className="btn_wrapper">
                    <button className="cta_join_btn">Get Started</button>
                    
                    <div className="customer_rating_wrapper">
                        <div className="customer_wrapper">
                        <figure>
                            <img src={ellipse_1} alt="" />
                            <img src={ellipse_2} alt="" />
                            <img src={ellipse_3} alt="" />
                        </figure>
                        <div className="customer">
                            <span>2,291</span>
                            <span>Happy Customer</span>
                        </div>
                        </div>
                        <hr />
                        <div className="rating_wrapper">
                        <span>4.8/5</span>
                        <div className="rating">
                            <figure>
                            <img src={coloredStar} alt="" />
                            <img src={coloredStar} alt="" />
                            <img src={coloredStar} alt="" />
                            <img src={coloredStar} alt="" />
                            <img src={star} alt="" />
                            </figure>
                            <span>Rating</span>
                        </div>
                        </div>
                    </div>
                </div>
                
                
                
                </div>
                  
                <div className="image_contaner">
                    <figure>
                        <img className='avatar' src={avatar} alt="" />
                    </figure>
                    
                    <img className='mini_image_1' src={mini_image_1} alt="" />
                    <img className='mini_image_2' src={mini_image_2} alt="" />
                
                    <img src={ellipse_6} alt="" className="ellipse_6" />
                    <img src={ellipse_42} alt="" className="ellipse_42" />
                  </div>
            </div>
            
            {/* <Companies /> */}
        </section>
    </React.Fragment>
  )
}

export default FirstSection