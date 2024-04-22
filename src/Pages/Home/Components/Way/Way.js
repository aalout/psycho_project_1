import React, { Component } from 'react'
import FirstIMG from "../../pic/psycologist-therapy-group-processing-in-the-circle-6-people-641796731.png"
import SecondIMG from "../../pic/2-people-trusts-themselfs-in-psycological-plan-909300349.png"
import ThirdIMG from "../../pic/group-psycotherapy-162475280.png"
import FourthIMG from "../../pic/psycotherapy-38524706.png"
import { Nav } from 'react-bootstrap';
import "./style.css"

export default class Way extends Component {
  render() {
    return (
        <div id='way' className='maindivway'>
          <div className='seconddiv'>
            <div className='divflex'>
              <div className='left'>
              <p className='item-header'>Знакомство. Самопрезентация.</p>
              <p className='itemtext'>Образование группы всегда является интересным процессом где вы можете выявить знакомые вам роли, которые вы используете при нахождении с незнакомыми вам людьми и попробовать новые.</p>
              </div>
              <div className='right'>
              <img alt='smth' src={FirstIMG} className='imgfirst'/>
              </div>
            </div>
            <div className='divflex1'>
              <div className='left1'>
              <img alt='smth' src={SecondIMG} className='imgfirst'/>
              </div>
              <div className='right1'>
              <p className='item-header'>Влияние на процессы</p>
              <p className='itemtext'>Группа так или иначе постепенно создает свои правила игры при взаимодействии и у вас есть возможность поисследовать свое влияние на эти процессы.</p>
              </div>
            </div>
            <div className='divflex2'>
              <div className='left'>
              <p className='item-header'>Взаимодействие с другими</p>
              <p className='itemtext'>Дистанция между членами группы постепенно уменьшается из-за увеличивающегося уровня доверия друг к другу. У вас есть возможность познакомиться с тем, как вы сближаетесь или отдаляетесь в контакте с другими людьми.</p>
              </div>
              <div className='right'>
              <img alt='smth' src={ThirdIMG} className='imgfirst'/>
              </div>
            </div>
            <div className='divflex3'>
              <div className='left1'>
              <img alt='smth' src={FourthIMG} className='imgfirst'/>
              </div>
              <div className='right1'>
              <p className='item-header'>Завершение процессов</p>
              <p className='itemtext'>Так или иначе в том виде, в котором вы проживали групповой процесс, этот процесс завершится. Это даст вам возможность поисследовать свое проживание утраты и расставания.</p>
              </div>
            </div>
            <div className='button-container'>
            <Nav.Link href="/schedule"><button className="detailed-button">Расписание групп</button></Nav.Link>
            </div>
          </div>
        </div>
    )
  }
}
