import React, { Component } from 'react'
import Arrow from "../../pic/Arrow.png";
import { Nav } from 'react-bootstrap';
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./style.css"

export default class Cover extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
		<div className="central-content-container">
			<div className="therapy-experience-section">
				<p className="majestic-heading">CРЕДА</p>
				<p className="majestic-text-block">Проект для тех, кто любит<br /><span className="visionary-text">групповой</span><span> формат<br />психологической поддержки</span> </p>
			</div>
			<div className="detailed-info-container1">
				<p className="detail-text-block">Подробнее</p>
				<div className="detailed-info-container">
					<AnchorLink href='#about'>
						<Nav.Link className='image-container' href="/"> <img src={Arrow} alt="smth" /> </Nav.Link>
					</AnchorLink>
				</div>
			</div>
		</div>
	    </div>
      </div>
    )
  }
}
