import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import "./style.css"

export default class About extends Component {
  render() {

    return (
		<div className='about-con' id='about'>
		  <p className="main-heading-style">О проекте</p>
		  <div className='video-con'>
		  <iframe title='welcome' className='video-welcome' src="https://rutube.ru/play/embed/edc6d4e51d047507723d9f9c3f59dda3/" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>
</div>
		  <div className="group-schedule-button-container">
			<Nav.Link href="/schedule">
			  <button href="/schedule" className="group-schedule-button">
				<p className='button-txt'>Расписание групп</p>
			  </button>
			</Nav.Link>
		  </div>
		</div>
	  )
	}
  }