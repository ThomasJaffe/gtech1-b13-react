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
      <h1>Boite Artiste</h1>
      <br/>
      <p>Les boites Artiste contiennent crayons, peintures et matériel pour tous les artistes petit et grand afin de vous exprimer pleinement au monde !</p>
      <br/>
      <MyCard />
      </div>
    </>
    );
  }
}

export default About;