import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import Photo from "../Home/pic/Rectangle 89.png"
import VK from "../Home/pic/free-icon-social-13670425 (2).png"
import TG from "../Home/pic/free-icon-telegram-2111644 (2).png"
import "./style.css"

export default class Home extends Component {
  render() {
    return (
      <div className='main-con'>
        <div className="platform-introduction-container1">
		<div className="psychotherapy-platform-layout1"> <img alt='smth' src={Photo} className="image-container-1" />
			<div className="psychotherapy-info-block">
				<div className="psychotherapy-platform-welcome">
					<p className="majestic-heading-1">Андрей Шамро</p>
					<p className="psychotherapy-text-style"> Меня зовут Андрей. Я психолог, супервизор, ведущий онлайн групп.
						<br />Особую любовь питаю к групповому формату взаимодействия. И жизнь люблю. И детей своих. И работу. Верю, что можно всё настроить как хочется – главное хотеть и не терять оптимизма. </p>
					<div className="content-wrapper-1">
						<Nav.Link className='image-avatar' href="https://vk.com/andreyshamro"> <img src={VK} alt="VK" /> </Nav.Link>
						<Nav.Link className='image-container-with-border' href="https://t.me/prof_identity"> <img src={TG} alt="TG" /> </Nav.Link>
					</div>
				</div>
			</div>
		</div>
	    </div>
      </div>
    );
  }
}