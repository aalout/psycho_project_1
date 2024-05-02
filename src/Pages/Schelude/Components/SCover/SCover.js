import React, { Component } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Arrow from "../../../Home/pic/Arrow.png"
import './style.css'

export default class SCover extends Component {
  render() {
    return (
        <div className='scover-con'>
        <div className='scover-con1'>
            <div className='sheading-con'>
                <p className="smajestic-heading-0">РАСПИСАНИЕ</p>
                <p className="smajestic-heading1">Здесь вы можете ознакомиться с <span className="svisionary-text">актуальными</span> группами.</p>
                <p className="smajestic-heading2">Подробнее</p>
                <AnchorLink href='#schelude'><div className='arrowc' href="/"> <img src={Arrow} alt="smth" /> </div> </AnchorLink>
            </div>
        </div>
      </div>
    )
  }
}
