import {Card,Button, CardGroup} from 'react-bootstrap';

function MyCard(){
    return <div className="d-flex justify-content-around">
    <CardGroup>
    <Card style={{ width: '25rem', marginRight:"5rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titre de la carte</Card.Title>
        <Card.Text>
          Texte de la carte
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titre de la carte</Card.Title>
        <Card.Text>
          Texte de la carte
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', marginLeft:"5rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Titre de la carte</Card.Title>
        <Card.Text>
          Texte de la carte
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    </CardGroup>
  </div>
}

export default MyCard;