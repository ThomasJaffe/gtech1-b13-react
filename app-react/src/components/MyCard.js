import {Card,Button,CardGroup} from 'react-bootstrap';

function MyCard(){
    return <div className="d-flex justify-content-around">
    <CardGroup>
    <Card style={{ width: '25rem', marginRight:"5rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Petite Boite</Card.Title>
        <Card.Text>
          Une petite boîte de 20 cm de côté
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Moyenne Boite</Card.Title>
        <Card.Text>
          Une moyenne boîte de 40 cm de côté
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem', marginLeft:"5rem" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Grande Boite</Card.Title>
        <Card.Text>
          Une grande boîte de 60 cm de côté
        </Card.Text>
        <Button variant="primary">Ajouter au panier</Button>
      </Card.Body>
    </Card>
    </CardGroup>
  </div>
}

export default MyCard;