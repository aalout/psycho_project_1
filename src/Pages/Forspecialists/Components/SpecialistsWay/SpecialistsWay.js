import React, { Component } from 'react'
import FirstIMG from "../pic/psycologist-therapy-group-processing-in-the-circle-6-people-641796731.png"
import SecondIMG from "../pic/2-people-trusts-themselfs-in-psycological-plan-909300349.png"
import ThirdIMG from "../pic/group-psycotherapy-162475280.png"
import './style.css'

export default class SpecialistsWay extends Component {
  render() {
    return (
        <div id='sway' className='smaindivway'>
        <div className='sseconddiv'>
          <div className='sdivflex'>
            <div className='sleft'>
            <p className='sitem-header1'>Пройдите собеседование</p>
            </div>
            <div className='sright'>
            <img alt='smth' src={FirstIMG} className='simgfirst'/>
            </div>
          </div>
          <div className='sdivflex1'>
            <div className='sleft1'>
            <img alt='smth' src={SecondIMG} className='simgfirst'/>
            </div>
            <div className='sright1'>
            <p className='sitem-header2'>Зачисление</p>
            <p className='sitemtext'>После пройденного интервью производится зачисление на обучающий курс «Ведение онлайн групп»</p>
            </div>
          </div>
          <div className='sdivflex2'>
            <div className='sleft'>
            <p className='sitem-header'>Вы - часть сообщества</p>
            <p className='sitemtext'>При успешном завершении обучения и защите своей программы, мы начинаем сотрудничество, и Вы становитесь частью нашего сообщества</p>
            </div>
            <div className='sright'>
            <img alt='smth' src={ThirdIMG} className='simgfirst'/>
            </div>
          </div>
          <div className='button-container'>
            <button className="group-schedule-button">Записаться на собеседование</button>
            </div>
        </div>
      </div>
    )
  }
}
