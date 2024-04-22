import React, { Component } from 'react'
import "./fitstyle.css"

export default class Fit extends Component {
  render() {
    return (
        <div className='fit-con'>
        <div className="square">
            <div className="row">
                <div className="item1">
                    <h2 className='itemtitle11'>Поддержка</h2>
                    <p className='itemtext11'>Получение терапевтической помощи и консультаций</p>
                </div>
                <div className="item2">
                    <h2 className='itemtitle111' >Профессиональный рост</h2>
                    <p className='itemtext11'>Участие в индивидуальных и групповых стратегических сессиях</p>
                </div>
                <div className="item3">
                    <h2 className='itemtitle11'>Развитие компетенций</h2>
                    <p className='itemtext11'>Участие в супервизорских группах, получение дополнительного образования</p>
                </div>
            </div>
            <div className="row">
                <div className="item4">
                    <h2 className='itemtitle11'>Проявленность</h2>
                    <p className='itemtext11'>Размещение на сайте анонсов ваших семинаров и программ</p>
                </div>
                <div className="item5">
                    <h2 className='itemtitle11'>Продвижение</h2>
                    <p className='itemtext11'>Получение помощи в продвижении и написании программ</p>
                </div>
                <div className="item6">
                    <h2 className='itemtitle11'>Доверие</h2>
                    <p className='itemtext11'>Посещение мероприятий доверенного круга экспертов</p>
                </div>
            </div>
        </div>
        </div>
    )  
  }
}
