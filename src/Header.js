import React, { Component } from 'react';
import style from './Header.module.css';

export class Header extends Component {
  render() {
    return (
      <div>
        <h4 className={style.header}>WEATHER APP</h4>
      </div>
    )
  }
}

export default Header
