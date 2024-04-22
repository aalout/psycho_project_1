import React, { Component } from 'react'
import "./style.css"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class AboutGroup extends Component {
  render() {
    return (
      <div>
        <div className="group-session-container">
		<div className="group-session-info-container1">
			<p className="main-heading-text-style">О групповых сессиях</p>
			<div className="therapy-info-container">
				<div className="therapy-info-container1">
					<div className="therapy-section">
						<p className="therapy-heading">Групповая терапия поможет вам найти и решить проблему, которая вас беспокоит</p>
						<p className="innovative-path-description">Каждый из нас понимает очевидную вещь: выбранный нами инновационный путь предопределяет высокую востребованность новых принципов формирования материально-технической и кадровой базы. Наше дело не так однозначно, как может показаться: существующая теория не оставляет шанса для как самодостаточных, так и внешне зависимых концептуальных решений.</p>
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
