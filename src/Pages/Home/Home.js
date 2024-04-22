import React, { Component } from 'react';
import "./style.css";
import Cover from "./Components/Cover/Cover"
import About from "./Components/About/About"
import AboutGroup from './Components/AboutGroup/AboutGroup';
import Pluses from "./Components/Pluses/Pluses"
import Way from './Components/Way/Way';
import BestPs from './Components/BestPs/BestPs';
import FAQ from './Components/FAQ/FAQ';

export default class Home extends Component {
  render() {
    return (
    <div className='main-con'>
		<Cover />
		<About />
		<AboutGroup />
		<Pluses />
		<Way />
		<BestPs />
		<FAQ />
	</div>
    );
  }
}
