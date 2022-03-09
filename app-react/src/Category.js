import React, { Component } from 'react';
import Menu from './components/Menu';
import MyCard from './components/MyCard';

class Category extends Component {
  constructor(props){
    super(props)
    this.state={
       categorie:null
    }
  }
  async componentDidMount (){
    const response = await fetch('http://localhost:1337/api/categories/1?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const categorie = await response.json()
    this.setState({
      categorie: categorie
    })
  }

  render() {
    console.log(this.state.categorie);
    if(this.state.categorie==null){
      return <div>Chargement</div>
    }
    return (
    <>
    <div>
    <Menu />
    </div>
    <div class="types">
      <h1>Boites {this.state.categorie.data.attributes.catname}</h1>
      <p>Nos produits :</p>
      <MyCard articles={this.state.categorie.data.attributes.articles.data}/>
      </div>
    </>
    );
  }
}

export default Category;