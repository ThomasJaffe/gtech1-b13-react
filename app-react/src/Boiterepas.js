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
      <h1>Boite Repas</h1>
      <br/>
      <p>Les boites Repas contiennet des denrées diverses et variées (et bien conservées) pour les gourmets ou simples amateurs culinaires, de quoi régaler les papilles !</p>
      <br/>
      </div>
    </>
    );
  }
}

export default About;