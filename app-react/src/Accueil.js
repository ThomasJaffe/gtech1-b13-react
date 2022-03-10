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
          <h1>Bienvenue sur le site internet des Boiboites !</h1>
          <br/>
          <h2>Différents types de boites disponibles :</h2>
          <br/>
          <h3>- Boites mystères Classique :</h3>
          <p>Les boites Classique contiennent de tout et n'importe quoi ! La surprise à l'état pur !</p>
          <br/>
          <h3>- Boites mystères Gamer : </h3>
          <p>Les boites Gamer contiennent du matériel informatique, composants électroniques, et jeux vidéos pour les gamers et de longues heures de fun !</p>
          <br/>
          <h3>- Boites mystères Repas :</h3>
          <p>Les boites Repas contiennent des denrées diverses et variées (et bien conservées) pour les gourmets ou simples amateurs culinaires, de quoi régaler les papilles !</p>
          <br/>
          <h3>- Boites mystères Bricolage :</h3>
          <p>Les boites Bricolage contiennent quelques outils et de quoi les utiliser pour les bricoleurs du dimanche et vos projets d'aménagement et de décoration !</p>
          <br/>
          <h3>- Boites mystères Artiste :</h3>
          <p>Les boites Artiste contiennent crayons, peintures et matériel pour tous les artistes petit et grand afin de vous exprimer pleinement au monde !</p>
          <br/>
          <h3>- Boites mystères Meuble :</h3>
          <p>Les boites Meuble contiennent un meuble pour les décorateurs en manque d'idée, pourquoi ne pas laisser la chance décider pour votre prochaine décoration ?</p>
          <br/>
          <h3>- Boites mystères Cocktail :</h3>
          <p>Les boites Cocktail contiennent l'un des cocktails au hasard de notre partenaire Lavacocktails® pour les amateurs d'alcool et de cocktails !</p>
        </div>
      </>
    );
  }
}

export default Accueil;