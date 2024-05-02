import React, { Component } from 'react';
import Cover from './Components/Cover/Cover';
import Fit from './Components/Fit/Fit';
import For from "./Components/For/For"
import SpecialistsWay from './Components/SpecialistsWay/SpecialistsWay';
import SFAQ from './Components/SFAQ/SFAQ';
import "./Pagestyle.css"

export default class Home extends Component {
  render() {
    return (
      <div className='conofcons'>
        <Cover/>
        <Fit />
        <For />
        <SpecialistsWay />
        <SFAQ />
      </div>
    );
  }
}