import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';
import YouTube from 'react-youtube';
import "./style.css"

export default class AboutTherapy extends Component {
  render() {
	const opts = {
		playerVars: {
		  autoplay: 0,
		},
	};
    return (
		<div className='aabout-con' id='about'>
		  <p className="main-heading-style">О проекте</p>
		  <div className='avideo-con'>
			<YouTube className='youtube' videoId="ARRzutztGR4" opts={opts} />
		  </div>
		  <div className="group-schedule-button-container">
			<Nav.Link href="/schedule">
			  <button className="group-schedule-button">
				<p className='button-txt'>Узнать подробнее</p>
			  </button>
			</Nav.Link>
		  </div>
		</div>
	  )
	}
  }