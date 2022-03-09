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
    const queryString = await window.location.search;
    const urlParams = await new URLSearchParams(queryString);
    const id = await urlParams.get("id")
    const response = await fetch('http://localhost:1337/api/categories/'+id+'?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
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
      <br/>
      <p>{this.state.categorie.data.attributes.catdescription}</p>
      <p>Nos produits :</p>
      <MyCard articles={this.state.categorie.data.attributes.articles.data}/>
      </div>
    </>
    );
  }
}

export default Category;