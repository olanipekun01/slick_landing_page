import React from 'react'
import '../../styles/LandingPage/FifthSection.scss';
import { useInView } from 'react-intersection-observer';



function FifthSection() {
  const { ref: myFifthsectionRef, inView: myFifthSectionIsVisible } = useInView()
  return (
    <React.Fragment>
        <section ref={myFifthsectionRef} className={myFifthSectionIsVisible ? "fifth_section sects show" : "fifth_section sects"}>
            <h2>Ready to transact easily? Start with SlickInvest, become financially secured!</h2>
            <button>Get Started</button>
        </section>
    </React.Fragment>
  )
}

export default FifthSection