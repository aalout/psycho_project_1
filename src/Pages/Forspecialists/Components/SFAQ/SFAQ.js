import React, { Component } from 'react'
import "./style.css"

export default class SFAQ extends Component {
  render() {
    return (
      <div className='SFAQ-con'>
        <section>
  <h1 className="FAQheading-text">
    Вопросы и ответы
  </h1>
  <details className='firstquestion'>
    <summary className='mainFAQ'>Размещать объявления о наборе в онлайн группу может любой специалист?</summary>
    <p className='secondFAQ'>
    Размещать информацию о своих программах могут только участники проекта. 
    </p>
  </details>
  <details className='questions' >
    <summary className='mainFAQ'>Могу ли я просто проходить курсы и участвовать в супервизорских группах, не будучи участником проекта? 
</summary>
    <p className='secondFAQ'>
    Да, можете. 
    </p>
  </details>
  <details className='questions'>
    <summary className='mainFAQ'>Ваше сообщество (телеграм-канал) на платной основе? </summary>
    <p className='secondFAQ'>Подписка на ТГ канал бесплатная, как и участие во встречах проекта #добрая_среда
</p>
  </details>
  <details className='questions'>
    <summary className='mainFAQ'>А если я веду очную группу? 
</summary>
    <p className='secondFAQ'>Вы можете участвовать в супервизорской группе для ведущих. Объявление на сайте публикуются только о группах в онлайн-формате. </p>
  </details>
  <details className='questions'>
    <summary className='mainFAQ'>Если участник проекта публикует объявление на Вашем сайте, кто отвечает за оплату? 
</summary>
    <p className='secondFAQ'>Организацию оплаты и коммуникации с участниками группы полностью берёт на себя ведущий. Мы публикуем только объявление, информацию о ведущем и его контакты.
</p>
  </details>
  <details className='questions'>
    <summary className='mainFAQ'>Существует ли ограничение по стоимости группы? </summary>
    <p className='secondFAQ'>
    Нет, Вы сами назначаете стоимость своей группы.
    </p>
  </details>
</section>
      </div>
    )
  }
}
