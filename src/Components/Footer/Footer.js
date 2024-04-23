import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import logo from "./pic/logo.png"
import arrow from "./pic/Polygon 65.png"
import "./style.css"

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="footer__addr">
        <Navbar.Brand href="/">
                    <img 
                        src={logo}
                        alt="Logo"
                    />
                </Navbar.Brand>
    
  </div>
  
  <ul className="footer__nav">
    <li className="nav__item">
      <h2 className="nav__title">Меню</h2>

      <ul className="nav__ul">
        <li className='gap'>
          <a href="/"> <img alt="smth" src={arrow} className='arrow'/>Главная</a>
        </li>

        <li className='gap'>
          <a href="/shelude"> <img alt="smth" src={arrow} className='arrow'/>Расписание</a>
        </li>
            
        <li className='gap'>
          <a href="/specialists"> <img alt="smth" src={arrow} className='arrow'/>Специалисты</a>
        </li>

        <li className='gap'>
          <a href="/forspecialists"><img alt="smth" src={arrow} className='arrow'/>Психологам</a>
        </li>
      </ul>
    </li>
    
    <li className="nav__item">
      <h2 className="nav__title">Контакты</h2>
      
      <ul className="nav__ul">
        <li className='gap'>
          <a href="https://vk.com/andrey_shamro"><img alt="smth" src={arrow} className='arrow'/>VK</a>
        </li>
        
        <li className='gap'>
          <a href="https://t.me/prof_identity"><img alt="smth" src={arrow} className='arrow'/>Telegram</a>
        </li>
        
        <li className='gap'>
          <a href="gmail.com"><img alt="smth" src={arrow} className='arrow'/>Email</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div className="legal">
    <p>&copy; 2024 Среда. All rights reserved.</p>
    
    <div className="legal__links">
      <span>Made with <span className="heart">♥</span> from aalout</span>
    </div>
  </div>
      </div>
    )
  }
}
