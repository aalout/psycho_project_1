import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import "./coverstyle.css"
import Arrow from "../../../Home/pic/Arrow.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Cover extends Component {
  render() {
    return (
      <div className='cover-con'>
        <div className='cover-con1'>
            <div className='heading-con'>
                <p className="majestic-heading-0">СРЕДА</p>
                <p className="majestic-heading1">Хотите стать участником проекта?</p>
                <div className='cover-button-con'>
                <Nav.Link href="https://t.me/andrey_shamro">
			  <button className="cover-button">
				<p className='button-txt'>Записаться на собеседование</p>
			  </button>
			</Nav.Link>
      </div>
                <p className='more'>Подробнее</p>
                <AnchorLink href='#fit'><div className='arrowc' href="/"> <img src={Arrow} alt="smth" /> </div> </AnchorLink>
            </div>
        </div>
      </div>
    )
  }
}
