import React, { Component } from 'react'
import tria1 from '../pic/tria1.svg'
import tria2 from '../pic/tria2.png'
import tria3 from '../pic/tria3.png'
import tria4 from '../pic/tria4.png'
import "./style.css"

export default class SchemeMobile extends Component {
  render() {
    return (
        <div className='mobile_scheme'>
            <div className="schemetoppane"><p className="schemeheading-text">Динамика движения обучающей группы: </p></div>
            <div className='main-prog-con'>
                <p className="main-schemeheading-text">1. Основная программа</p>
            </div>
            <div className='mobile_column'>
                <div className='mobile_row'>
                    <p className='start'>Старт</p>
                    <p>Кто я, как ведущий? <br/> Что хочу донести до <br/> участников?</p>
                    <p>Аспекты работы в <br/> онлайн-группе</p>
                    <p>Финиш</p>
                </div>
                <div className='mobile_row'>
                    <p>Мотив - для чего мне <br/> вести группы?</p>
                    <p>Составление программы <br/> группы</p>
                    <p>Защита выпускной <br/> работы/практика</p>
                </div>
            </div>

            <div className='mobile_main-prog-con'>
                <p className="main-schemeheading-text">2. Дополнительные модули</p>
            </div>

            <div className='mobile_semi-list-div'>
                <ul className='mobile_semi-list'>
                    <li className='mobile_semi-item'>
                        <img src={tria1} alt='tria1' className='mobile_triangle'/>
                        <p className='mobile_semi-text'>Как создать свою программу?</p>
                    </li>

                    <li className='mobile_semi-item'>
                        <img src={tria2} alt='tria2' className='mobile_triangle'/>
                        <p className='mobile_semi-text'>Как эффективно использовать энергию в работе с группой?</p>
                    </li>

                    <li className='mobile_semi-item'>
                        <img src={tria3} alt='tria3' className='mobile_triangle'/>
                        <p className='mobile_semi-text'>Специфика создания процедур/упражнений в онлайн группах</p>
                    </li>
                    
                    <li className='mobile_semi-item'>
                        <img src={tria4} alt='tria4' className='mobile_triangle'/>
                        <p className='mobile_semi-text'>Разнообразие ролей ведущего групп</p>
                    </li>
                </ul>
            </div>
        </div>
    )
  }
}