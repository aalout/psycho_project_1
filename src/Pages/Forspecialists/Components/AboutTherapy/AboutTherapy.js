import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import YouTube from 'react-youtube';
import "./style.css"

export default class AboutTherapy extends Component {
	render() {
		const opts = {
			width: "100%",
			height: "100%",
			playerVars: {
			  autoplay: 0,
			},
		};
	
		return (
			<div className='about-con' id='about'>
			  <p className="main-heading-style">О проекте</p>
			  <div className='video-con'>
	  <YouTube
		className='youtube'
		videoId="-POgTXAuckU"
		opts={opts}
	  />
	</div>
			  <div className="group-schedule-button-container">
				<Nav.Link href="/schedule">
				  <button href="/schedule" className="group-schedule-button">
					<p className='button-txt'>Узнать подробнее</p>
				  </button>
				</Nav.Link>
			  </div>
			</div>
		  )
		}
	  }