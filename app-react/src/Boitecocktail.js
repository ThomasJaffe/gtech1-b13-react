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
      <h1>Boite Cocktail</h1>
      <br/>
      <p>Les boites Cocktail contiennent l'un des cocktails au hasard de notre partenaire Lava-Cocktail® pour les amateurs d'alcool et de coktails !</p>
      <br/>
      <MyCard/>
      </div>
    </>
    );
  }
}

export default About;