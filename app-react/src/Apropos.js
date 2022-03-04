import React, { Component } from 'react';
import Menu from './components/Menu';

class About extends Component {
  render() {
    return (
    <>
    <div>
    <Menu />
    </div>
    <div class="types">
      <h1>À propos :</h1>
      <br/>

      <h2>Raretés :</h2>
      <p>Au moment où vous achetez une boite, vous avez une chance de recevoir cette boite avec un contenu d'une
        valeur bien plus élevé ou plus faible que la normale peu importe son type.
        Les raretés sont:</p>
      <ul>
        <li>Carton (10.00 % de chance d'obtenir), ~75 % de la valeur ;</li>
        <li>Bois (78.99 % de chance d'obtenir), ~100 % de la valeur ;</li>
        <li>Argent (7.50 % de chance d'obtenir), ~150 % de la valeur ;</li>
        <li>Or (2.50 % de chance d'obtenir), ~200 % de la valeur ;</li>
        <li>Platine (1.00 % de chance d'obtenir), ~300 % de la valeur ;</li>
        <li>Diamant (0.01 % de chance d'obtenir), ~400 % de la valeur.</li>
      </ul>
      <br/>

      <h2>Comment les boites sont-elles préparées ?</h2>
      <p>Chaque boite est préparée à la main et est rempli d'un ou plusieurs produits de la catégorie de votre choix 
      correspondant à la rareté que la chance vous a donné.</p>
      <br/>
      <h2>Qu'y a-t-il dans une boite ?</h2>
      <p>Surprise, enfin presque : en choisissant la catégorie d'une boite vous selectionnez quel type d'objet vous 
      souhaitez avoir, à l'exception de la catégorie "Classique" où la surprise est totale et peut contenir des 
      produits de n'importe quelle autre catégorie.</p>
      <br/>

      <h2>Quelle sont les dimensions des boites ?</h2>
      <ul>
        <li>Petite Boite : 20 cm de côté ;</li>
        <li>Moyenne Boite : 40 cm de côté ;</li>
        <li>Grande Boite : 60 cm de côté;</li>
      </ul>
      </div>
    </>
    );
  }
}

export default About;