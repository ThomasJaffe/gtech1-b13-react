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
      <h1>Boite Bricolage</h1>
      <br/>
      <p>Les boites Bricolage contiennent quelques outils et de quoi les utiliser pour les bricoleurs du dimanche et vos projets d'aménagement et de décoration !</p>
      <br/>
      <MyCard/>
      </div>
    </>
    );
  }
}

export default About;