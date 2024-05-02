import React, { Component } from 'react'
import "./style.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class AboutGroup extends Component {
  render() {
    return (
      <div className='aboutgroup-con'>
        <div className="group-session-container">
		<div className="group-session-info-container1">
			<p className="main-heading-text-style">О групповых сессиях</p>
			<div className="therapy-info-container">
				<div className="therapy-info-container1">
					<div className="therapy-section">
						<p className="therapy-heading">Групповая терапия поможет вам найти и решить проблему, которая вас беспокоит</p>
						<p className="innovative-path-description">В группе можно научиться видеть и слышать себя шире и многограннее <br/>

В группе можно проявлять себя в безопасной атмосфере<br/>

В группе можно получить больше поддержки и откликов на ваши сложности<br/>

В группе глубоко и тепло проживать разные чувства, делиться печалями и радостями<br/>

В группе каждый обогащает каждого и обогащается от всех (чувствами, идеями, планами, новыми взглядами на себя и мир)
</p>
						<AnchorLink href='#way'>
							<div className="content-wrapper-2">
								<button className="detailed-button">Подробнее</button>
							</div>
						</AnchorLink>
					</div>
				</div>
			</div>
		</div>
	    </div>
      </div>
    )
  }
}
