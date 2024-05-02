import React, { Component } from 'react'
import "./coverstyle.css"
import Arrow from "../../../Home/pic/Arrow.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Cover extends Component {
  render() {
    return (
      <div className='cover-con'>
        <div className='cover-con1'>
            <div className='heading-con'>
                <p className="majestic-heading-0">CРЕДА</p>
                <p className="majestic-heading1">Хотите стать участником проекта?</p>
                <p className="majestic-heading2">Заполните форму ниже и мы свяжемся с вами</p>
                <div className='cover-button-con'>
                    <button className="cover-button">
					    <p className='button-txt'>Записаться на собеседование</p>
				    </button>
                </div>
                <p className='more'>Подробнее</p>
                <AnchorLink href='#fit'><div className='arrowc' href="/"> <img src={Arrow} alt="smth" /> </div> </AnchorLink>
            </div>
        </div>
      </div>
    )
  }
}
