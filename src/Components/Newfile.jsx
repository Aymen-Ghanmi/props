import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Newfile = (props) => {
  return (
    <div >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.uuurl}  />
      <Card.Body style={props.bstyle}>
        <Card.Title>{props.bname}</Card.Title>
        <Card.Text>
          {props.btype}
          <h5>${props.bprice}</h5>
        </Card.Text>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
    </div>
  )
}







export default Newfile