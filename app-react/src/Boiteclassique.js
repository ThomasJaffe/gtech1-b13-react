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
      <h1>Boite Classique</h1>
      <br/>
      <p>Les boites Classique contiennent de tout et n'importe quoi ! La surprise à l'état pur !</p>
      <br/>
      </div>
    </>
    );
  }
}

export default About;