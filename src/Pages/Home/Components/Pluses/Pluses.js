import React, { Component } from 'react'
import "./style.css"

export default class Pluses extends Component {
  render() {
    return (
        <div className="container">
            <div class="toppane"><p className="heading-text">Одна групповая сессия это </p></div>
  <div className="d-flex">
    <div className="leftpane"><p className="heading-text">До 12</p><p className="secondary-text">участников</p></div>
    <div className="middlepane"><p className="heading-text">Около 2.5</p><p className="secondary-text">часов</p></div>
    <div className="rightpane"><p className="heading-text">Online</p><p className="secondary-text">удобный формат</p></div>
  </div>
</div>
    )
  }
}
