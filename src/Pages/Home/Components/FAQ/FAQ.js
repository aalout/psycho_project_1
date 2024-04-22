import React, { Component } from 'react'
import "./FAQ.css"

export default class FAQ extends Component {
  render() {
    return (
      <div className='FAQ-con'>
        <section>
  <h1 className="FAQheading-text">
    Вопросы и ответы
  </h1>
  <details className='firstquestion'>
    <summary className='mainFAQ'>Что нужно, чтобы попасть на группу?</summary>
    <p className='secondFAQ'>
    Все участники проходят предварительное собеседование с ведущим группы. Это необходимо для более глубокого знакомства, прояснения Вашего запроса и разъяснения особенностей группового формата работы.
    </p>
  </details>
  <details className='questions' >
    <summary className='mainFAQ'>Что лучше выбрать - личный формат работы или групповой?</summary>
    <p className='secondFAQ'>
    Групповые и личные встречи — это два разных формата взаимодействия с психологом.
 Вы можете одновременно быть и в личной терапии, и ходить на группу.
    </p>
  </details>
  <details className='questions'>
    <summary className='mainFAQ'>Как проводится отбор специалистов вашего сервиса?</summary>
    <p className='secondFAQ'>Все психологи сервиса в обязательном порядке проходят курс по ведению онлайн групп. 
Так же мы проверяем образование специалистов, их опыт и квалификации.
Все наши психологии являются дипломированные специалистами и имеют опыт ведения групп.</p>
  </details>
  <details className='questions'>
    <summary className='mainFAQ'>Можно ли пропускать групповые сессии?</summary>
    <p className='secondFAQ'>Групповые сессии пропускать возможно, но не рекомендуется. 
На некоторых группах пропуски оплачиваются. Если такое правило существует, ведущий группы на интервью проинформирует Вас об этом.</p>
  </details>
  <details className='questions'>
    <summary className='mainFAQ'>Могу ли я уже в процессе отказаться от участия в группе?</summary>
    <p className='secondFAQ'>Это Ваше право – закончить процесс, если так сложились обстоятельства. 
Желательно в таком случае посетить заключительную встречу, рассказать о своем решении. И получить обратную связь и эмоциональный отклик на пройденный совместно этап.
</p>
  </details>
</section>
      </div>
    )
  }
}
