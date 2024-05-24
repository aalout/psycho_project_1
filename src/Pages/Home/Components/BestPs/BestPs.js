import React, { Component } from 'react'
import diploma from "../../pic/diploma.png"
import high from "../../pic/high.png"
import groupexp from "../../pic/groupexp.png"
import award from "../../pic/award (3).png"
import online from "../../pic/online (3).png"
import "./style.css"

export default class BestPs extends Component {
  render() {
    return (
<div className="gcontainer">
	<div class="gtoppane">
		<p className="gheading-text">Мы работаем только с <span className='best'>лучшими</span> психологами </p>
        <p className='all-psycho'>Все наши психологи имеют</p>
	</div>
	<div className="gd-flex">
		<div className="gleftpane">
            <img className='best_img' alt="smth" src={high}/>
			<p className="gsecondary-text">Высшее образование <br />в сфере психологии</p>
		</div>
		<div className="gmiddlepane">
            <img className='best_img' alt="smth" src={groupexp}/>
			<p className="gsecondary-text">Регулярную личную <br /> психотерапию</p>
		</div>
		<div className="gmiddlepane">
            <img className='best_img' alt="smth" src={award}/>
			<p className="gsecondary-text">Регулярную супервизию</p>
		</div>
		<div className="gmiddlepane">
            <img className='best_img' alt="smth" src={diploma}/>
			<p className="gsecondary-text">Пройденное обучение на курсе <br />"Ведение онлайн-групп"</p>
		</div>
		<div className="grightpane">
            <img className='best_img' alt="smth" src={online}/>
			<p className="gsecondary-text">Опыт ведения онлайн-групп</p>
		</div>
	</div>
</div>
    )
  }
}
