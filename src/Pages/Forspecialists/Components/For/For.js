import React, { Component } from 'react'
import "./style.css"

export default class For extends Component {
  render() {
    return (
        <div className="forcontainer">
        <div class="fortoppane"><p className="forheading-text">Для успешного сотрудничества <br/> мы ждём от вас </p></div>
<div className="ford-flex">
<div className="forleftpane"><p className="forheading-text">Опыт</p><p className="forsecondary-text">Опыт проведения <br/>групповых сессий с полным циклом</p></div>
<div className="formiddlepane"><p className="forheading-text">Супервизия</p><p className="forsecondary-text">Регулярное прохождение супервизии <br/>
(Не реже 1 раза в 2 недели)</p></div>
<div className="forrightpane"><p className="forheading-text">300+ часов обучения</p><p className="forsecondary-text">Минимум 300 часов в одном из<br/>терапевтических методов</p></div>
<div className="forrightpane"><p className="forheading-text">Образование</p><p className="forsecondary-text">Базовое психологическое образование</p></div>
</div>
</div>
    )
  }
}
