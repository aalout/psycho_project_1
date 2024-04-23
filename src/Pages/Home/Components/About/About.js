import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import YouTube from 'react-youtube';
import "./style.css"

export default class About extends Component {
  render() {
	const opts = {
		playerVars: {
		  autoplay: 1,
		},
	};
    return (
		<div className='about-con' id='about'>
		  <p className="main-heading-style">О проекте</p>
		  <div className='video-con'>
			<YouTube className='youtube' videoId="-POgTXAuckU" opts={opts} />
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
