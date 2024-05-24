import React, { Component } from 'react'
import tria1 from '../pic/tria1.svg'
import tria2 from '../pic/tria2.png'
import tria3 from '../pic/tria3.png'
import tria4 from '../pic/tria4.png'
import "./style.css"

export default class Scheme extends Component {
  render() {
    const firstListItems = ['Старт', 'Кто я, как ведущий? Что хочу донести до участников?', 'Аспекты работы в онлайн-группе', 'Финиш'];
    const secondListItems = ['Мотив - для чего мне вести группы?', 'Составление программы группы', 'Защита выпускной работы/практика'];
    return (
        
        <div className='scheme'>
            <div className="schemetoppane"><p className="schemeheading-text">Динамика движения обучающей группы: </p></div>

            <div className='main-prog-con'>
                <p className="main-schemeheading-text">1. Основная программа</p>
            </div>
            
            <div className="horizontal-lists-container">
      <div className="horizontal-list-container">
        {firstListItems.map((item, index) => (
          <div key={index} className={`horizontal-list-item ${index === 0 ? 'first-item' : index === firstListItems.length - 1 ? 'last-item' : ''}`}>
            {item}
          </div>
        ))}
      </div>
      <div className="horizontal-list-container second-list">
        {secondListItems.map((item, index) => (
          <div key={index} className="horizontal-list-item">
            {item}
          </div>
        ))}
      </div>
    </div>

            <div className='main-prog-con'>
                <p className="main-schemeheading-text">2. Дополнительные модули</p>
            </div>

            <div className='semi-list-div'>
                <ul className='semi-list'>
                    <li className='semi-item'>
                        <img src={tria1} alt='tria1' className='triangle'/>
                        <p className='semi-text'>Как создать свою программу?</p>
                    </li>

                    <li className='semi-item'>
                        <img src={tria2} alt='tria2' className='triangle'/>
                        <p className='semi-text'>Как эффективно использовать энергию в работе с группой?</p>
                    </li>

                    <li className='semi-item'>
                        <img src={tria3} alt='tria3' className='triangle'/>
                        <p className='semi-text'>Специфика создания процедур/упражнений в онлайн группах</p>
                    </li>
                    
                    <li className='semi-item'>
                        <img src={tria4} alt='tria4' className='triangle'/>
                        <p className='semi-text'>Разнообразие ролей ведущего групп</p>
                    </li>
                </ul>
            </div>
      </div>
    )
  }
}