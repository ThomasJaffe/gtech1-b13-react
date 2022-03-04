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
        <br/>
        <h2>- Boites mystères Classique :</h2>
        <p>Les boites Classique contiennent de tout et n'importe quoi ! La surprise à l'état pur !</p>
        <br/>
        <h2>- Boites mystères Gamer : </h2>
        <p>Les boites Gamer contiennent du matériel informatique, composants électroniques, et jeux vidéos pour les gamers et de longues heures de fun !</p>
        <br/>
        <h2>- Boites mystères Repas :</h2>
        <p>Les boites Repas contiennet des denrées diverses et variées (et bien conservées) pour les gourmets ou simples amateurs culinaires, de quoi régaler les papilles !</p>
        <br/>
        <h2>- Boites mystères Bricolage :</h2>
        <p>Les boites Bricolage contiennent quelques outils et de quoi les utiliser pour les bricoleurs du dimanche et vos projets d'aménagement et de décoration !</p>
        <br/>
        <h2>- Boites mystères Artiste :</h2>
        <p>Les boites Artiste contiennent crayons, peintures et matériel pour tous les artistes petit et grand afin de vous exprimer pleinement au monde !</p>
        <br/>
        <h2>- Boites mystères Meuble :</h2>
        <p>Les boites Meuble contiennent un meuble pour les décorateurs en manque d'idée, pourquoi ne pas laisser la chance décider pour votre prochaine décoration ?</p>
        <br/>
        <h2>- Boites mystères Cocktail :</h2>
        <p>Les boites Cocktail contiennent l'un des cocktails au hasard de notre partenaire Lava-Cocktail® pour les amateurs d'alcool et de coktails !</p>
    </div>
    </>
    );
  }
}

export default Accueil;