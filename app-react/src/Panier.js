import React, { Component } from 'react';
import Menu from './components/Menu';
import money from "./components/takemymoney.jpg";


class About extends Component {
  render() {
    return (
      <>
        <div>
          <Menu />
        </div>
        <div class="types">
          <h1>Panier</h1>
          <br/>
          <h2>Contenu de votre panier :</h2>
          <br/>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <img id="money" src={money}/>
        </div>
      </>
    );
  }
}

export default About;