import React, {useRef, useEffect} from 'react'
import '../../styles/LandingPage/Features.scss'
import { useInView } from 'react-intersection-observer';

import card_icon_3 from '../../assets/card_icon_3.svg'
import card_icon_2 from '../../assets/card_icon_2.svg'
import card_icon_1 from '../../assets/card_icon_1.svg'
import CartGeometric from '../../assets/CartGeometric.png'
import CartMinimal from '../../assets/CartMinimal.png'
import card_2_image from '../../assets/card_2_image.png'
import MapWrap from '../../assets/MapWrap.png'

function Features(props) {
    const { ref: myThirdFeatureRef, inView: myThirdFeatureIsVisible } = useInView()
    // const myRef = useRef();

    // useEffect(() => {
    //     console.log("my ref", myRef)
    // })
  return (
    <React.Fragment>
        <section ref={props.myRef} className={props.visible ? "features sects show" : "features sects" }>
              <h2 >FEEL THE BEST EXPERIENCE WITH OUR FEATURES</h2>
            <div className="container">
                <div className="wrapper">
                    <div className="card">
                        <img className='icon' src={card_icon_1} alt="" />
                        <h3>Custom  & designs your card, make it unique  </h3>
                        <p>Create a custom card that reflects your unique stlye and personality. Choose from a range of colors, patterns, and design to customize the look of your card.</p>
                        <figure>
                            <img className='cart_geometric' src={CartGeometric} alt="" />
                            <img className='cart_minimal' src={CartMinimal} alt="" />
                        </figure>
                    </div>
                    
                    <div className="card">
                        <img className='icon' src={card_icon_2} alt="" />
                        <h3>Personalize your financial insights and goals</h3>
                        <p>Track your spending patterns, analyze income or expenses easily, and receive personalized recommendations to optimize to ur financial habits.</p>
                        <figure>
                            <img className='' src={card_2_image} alt="" />
                            
                        </figure>
                    </div>
                </div>

                <div ref={myThirdFeatureRef} className={myThirdFeatureIsVisible ? "card map show" : "card map"}>
                    <div className="wrap">
                        <img className='icon' src={card_icon_3} alt="" />
                          <h3>Free transfer any where around the world </h3>
                          <p>Experience the freedom of hassle-free money transfers with our free transfer admin finance app. Say goodbye to unnecessary fees and enjoy seamless transactions.</p>
                    </div>
                      <figure>
                          <img src={MapWrap} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}

export default Features