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
        <p>Contenu : Tout et n'importe quoi! La surprise à l'état pur!</p>
        <h2>- Boites mystères Gamer : </h2>
        <p>Contenu : Pour vous les gamers, matériel informatique, composants électroniques, et jeux vidéos pour de longues heures de fun!</p>
        <h2>- Boites mystères Repas :</h2>
        <p>Contenu : Pour les gourmets ou simple amateurs culinaire, des denrées diverse et variées (et bien conservé) de quoi régaler les papilles!</p>
        <h2>- Boites mystères Bricolage :</h2>
        <p>Contenu : Pour les bricoleurs du dimanche, quelques outils et de quoi les utiliser pour vos projets d'aménagement et de décoration!</p>
        <h2>- Boites mystères Artiste :</h2>
        <p>Contenu : Pour tous les artistes petit et grand, crayons, peintures et matériel afin de vous exprimer pleinement au monde!</p>
        <h2>- Boites mystères Meuble :</h2>
        <p>Contenu : Pour les décorateurs en manque d'idée, pourquoi ne pas laissez la chance décider pour votre prochaine décoration?</p>
        <h2>- Boites mystères Cocktail :</h2>
        <p>Contenu : Pour les amateurs d'alcool et de coktails, recevez au hasard l'un des coktails de notre partenaire Lava-Cocktail®!</p>
    </div>
    </>
    );
  }
}

export default Accueil;