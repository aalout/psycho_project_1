import React, { Component } from 'react';
import SCover from './Components/SCover/SCover';
import Lessons from './Components/Lessons/Lessons';

export default class Home extends Component {
  render() {
    return (
      <div className='conofcons'>
        <SCover />
        <Lessons />
      </div>
    );
  }
}