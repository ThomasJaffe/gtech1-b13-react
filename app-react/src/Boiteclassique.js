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
      <h1>Boite Classique</h1>
      <br/>
      <p>Les boites Classique contiennent de tout et n'importe quoi ! La surprise à l'état pur !</p>
      <br/>
      <MyCard/>
      </div>
    </>
    );
  }
}

export default About;