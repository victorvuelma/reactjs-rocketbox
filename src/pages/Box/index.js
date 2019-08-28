import React, { Component } from 'react';

import { MdInsertDriveFile } from 'react-icons/md';

import logo from '../../assets/logo.svg';
import './style.css';

export default class Box extends Component {
  render() {
    return (
      <div id="box-container">
        <header>
          <img src={logo} alt="" />
          <h1>Rocketseat</h1>
        </header>

        <ul>
          <li>
            <a className="fileInfo" href="">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <strong>Desafio.pdf</strong>
            </a>

            <span>há 3 minutos atrás</span>
          </li>
          <li>
            <a className="fileInfo" href="">
              <MdInsertDriveFile size={24} color="#A5CFFF" />
              <strong>Desafio.pdf</strong>
            </a>

            <span>há 3 minutos atrás</span>
          </li>
        </ul>
      </div>
    );
  }
}
