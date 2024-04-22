import React, { Component } from 'react'
import { Navbar } from 'react-bootstrap'
import logo from "./pic/logo.png"
import arrow from "./pic/Polygon 65.png"
import "./style.css"

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div class="footer__addr">
        <Navbar.Brand href="/">
                    <img 
                        src={logo}
                        alt="Logo"
                    />
                </Navbar.Brand>
    
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Меню</h2>

      <ul class="nav__ul">
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
    
    <li class="nav__item">
      <h2 class="nav__title">Контакты</h2>
      
      <ul class="nav__ul">
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
  
  <div class="legal">
    <p>&copy; 2024 Среда. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> from aalout</span>
    </div>
  </div>
      </div>
    )
  }
}
