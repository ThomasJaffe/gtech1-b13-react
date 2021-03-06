import {Card,Button} from 'react-bootstrap';
import Boite from './Boite mystere.png';

function MyCard(props){
    return <div className="d-flex justify-content-around">
    {props.articles.map((u,i) =><Card key={i} style={{ width: '25rem', marginRight:"2rem", marginLeft:"2rem" }}>
      <Card.Img variant="top" src={Boite}/>
      <Card.Body>
        <Card.Title>{u.attributes.name}</Card.Title>
        <Card.Text>
          {u.attributes.description}
          <br/>
          <br/>
          Prix : {u.attributes.price} €
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>)}
    
  </div>
}

export default MyCard;