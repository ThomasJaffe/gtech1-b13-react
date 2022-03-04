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
      <h1>Boite Bricolage</h1>
      <br/>
      <p>Les boites Bricolage contiennent quelques outils et de quoi les utiliser pour les bricoleurs du dimanche et vos projets d'aménagement et de décoration !</p>
      <br/>
      </div>
    </>
    );
  }
}

export default About;