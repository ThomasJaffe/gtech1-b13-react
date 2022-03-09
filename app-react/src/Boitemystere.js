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
      <h1>Boite Mystère</h1>
      <p>Nos produits :</p>
      <MyCard/>
      </div>
    </>
    );
  }
}

export default About;