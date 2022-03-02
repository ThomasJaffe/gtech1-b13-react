import React, { Component } from 'react';
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
        <p>Les boites mystère contiennent de tout et n'importe quoi ! La surprise à l'état pur !</p>
        <h2>- Boites mystères Gamer : </h2>
        <p>Les boites Gamer contiennent du matériel informatique, composants électroniques, et jeux vidéos pour les gamers et de longues heures de fun !</p>
        <h2>- Boites mystères Repas :</h2>
        <p>Les boites Repas contiennet des denrées diverses et variées (et bien conservées) pour les gourmets ou simples amateurs culinaires, de quoi régaler les papilles !</p>
        <h2>- Boites mystères Bricolage :</h2>
        <p>Contenu : </p>
        <h2>- Boites mystères Artiste :</h2>
        <p>Contenu : </p>
        <h2>- Boites mystères Meuble :</h2>
        <p>Contenu : </p>
        <h2>- Boites mystères Cocktail :</h2>
        <p>Contenu : </p>
    </div>
    </>
    );
  }
}

export default Accueil;