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
      <h1>Boite Gamer</h1>
      <br/>
      <p>Les boites Gamer contiennent du matériel informatique, composants électroniques, et jeux vidéos pour les gamers et de longues heures de fun !</p>
      <br/>
      <MyCard/>
      </div>
    </>
    );
  }
}

export default About;