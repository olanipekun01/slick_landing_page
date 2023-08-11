import React from 'react'
import '../../styles/LandingPage/Companies.scss'

import oracleIcon from '../../assets/oracle.svg';
import morpheusIcon from '../../assets/morpheus.svg';
import samsungIcon from '../../assets/samsung.svg';
import mondayIcon from '../../assets/monday.svg';
import segmentIcon from '../../assets/segment.svg';
import protonetIcon from '../../assets/protonet.svg';

function Companies(props) {
  return (
    <React.Fragment>
        <section ref={props.myRef} className={props.visible ? "company_wrapper sects show" : "company_wrapper sects"}>
              <img src={oracleIcon} alt="" />
              <img src={morpheusIcon} alt="" />
              <img src={samsungIcon} alt="" />
              <img src={mondayIcon} alt="" />
              <img src={segmentIcon} alt="" />
              <img src={protonetIcon} alt="" />
            
        </section>
    </React.Fragment>
  )
}

export default Companies