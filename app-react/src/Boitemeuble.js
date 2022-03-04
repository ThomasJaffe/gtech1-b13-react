import React, { Component } from 'react';
import Menu from './components/Menu';
import MyCard from './components/MyCard';

class About extends Component {
  render() {
    return (
    <>
    <div>
    <Menu />
    </div>
    <div class="types">
      <h1>Boite Meuble</h1>
      <br/>
      <p>Les boites Meuble contiennent un meuble pour les décorateurs en manque d'idée, pourquoi ne pas laisser la chance décider pour votre prochaine décoration ?</p>
      <br/>
      <MyCard/>
      </div>
    </>
    );
  }
}

export default About;