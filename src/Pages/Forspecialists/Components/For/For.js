import React, { Component } from 'react'
import "./style.css"

export default class For extends Component {
  render() {
    return (
        <div className="forcontainer">
        <div className="fortoppane"><p className="forheading-title">Для успешного сотрудничества <br className='forbr'/> мы ждём от вас </p></div>
<div className="ford-flex">
<div className="forleftpane"><p className="forheading-text">Опыт</p><p className="forsecondary-text">Опыт участия <br className='forbr'/>в групповых сессиях с полным циклом</p></div>
<div className="formiddlepane"><p className="forheading-text">Супервизия</p><p className="forsecondary-text">Регулярное прохождение супервизии <br className='forbr'/>
(Не реже 1 раза в 2 недели)</p></div>
<div className="forrightpane"><p className="forheading-text">300+ часов обучения</p><p className="forsecondary-text">Минимум 300 часов в одном из<br className='forbr'/> терапевтических методов</p></div>
<div className="forrightpane"><p className="forheading-text">Образование</p><p className="forsecondary-text">Базовое психологическое образование</p></div>
</div>
</div>
    )
  }
}
