import React, { useState, useEffect, useRef } from 'react'
import ScrollAnimation from '../../components/ScrollAnimation';
import { useInView } from 'react-intersection-observer';

import Header from '../../layouts/Header'
import FirstSection from './FirstSection'
import Companies from './Companies'
import Features from './Features'
import ReasonSection from './ReasonSection'
import FourthSection from './FourthSection'
import FifthSection from './FifthSection'
import Footer from '../../layouts/Footer'


function LandingPage() {
  const { ref: myFeatureRef, inView: myFeatureIsVisible } = useInView()

  const { ref: firstSectionRef, inView: FirstSectionVisible } = useInView()

  const { ref: CompaniesRef, inView: CompaniesVisible } = useInView()
  
  // const myRef = useRef();
  // const [myElementIsVisible, setMyElementIsVisible] = useState()
  // console.log('my element is visible', myElementIsVisible)
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     const entry = entries[0]
  //     setMyElementIsVisible(entry.isIntersecting)

  //     console.log("entry", entry)
  //   })

  //   observer.observe(myRef.current)
  // }, [])

  // useEffect(() => {
  //   function checkBoxes() {
  //     const hiddenElements = document.querySelectorAll('.sects');

  //     const triggerBottom = window.innerHeight / 5 * 4;



  //     hiddenElements.forEach((sect) => {
  //       const boxTop = sect.getBoundingClientRect().top;
      

  //       if (boxTop < triggerBottom) {
  //         sect.classList.add('show');
  //       } else {
  //         sect.classList.remove('show')
  //       }
  //     })
  //   }

  //   window.addEventListener('scroll', checkBoxes);
  // })

  return (
    <React.Fragment>
      {/* <ScrollAnimation triggerPoint={0}> */}
        <FirstSection myRef={firstSectionRef} visible={FirstSectionVisible} />
      {/* </ScrollAnimation> */}
        
      {/* <ScrollAnimation triggerPoint={300}> */}
        <Companies myRef={CompaniesRef} visible={CompaniesVisible} />
      {/* </ScrollAnimation> */}
        
      <Features myRef={myFeatureRef} visible={myFeatureIsVisible} />
        <ReasonSection />
        <FourthSection />
        <FifthSection />
        <Footer />
    </React.Fragment>
  )
}

export default LandingPage