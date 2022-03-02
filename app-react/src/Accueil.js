import React, { Component } from 'react';
import MyCard from './components/MyCard';
import Menu from './components/Menu';

class Accueil extends Component {
  render() {
    return (
    <>
    <div>
    <Menu />
    </div>
    <div class="types">
        <h1>Différents types de boites disponibles :</h1>
        <h2>- Boites mystères Classique :</h2>
        <p>Contenu des boites Classique</p>
        <h2>- Boites mystères Gamer :</h2>
        <p>Contenu des boites Gamer</p>
        <h2>- Boites mystères Repas :</h2>
        <p>Contenu des boites Repas</p>
        <h2>- Boites mystères Bricolage :</h2>
        <p>Contenu des boites Bricolage</p>
        <h2>- Boites mystères Artiste :</h2>
        <p>Contenu des boites Artiste</p>
        <h2>- Boites mystères Meuble :</h2>
        <p>Contenu des boites Meuble</p>
        <h2>- Boites mystères Cocktail :</h2>
        <p>Contenu des boites Cocktail</p>
    </div>
    </>
    );
  }
}

export default Accueil;