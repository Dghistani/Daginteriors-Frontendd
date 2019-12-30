import React, { Component } from 'react'
import {Card, Button, Row, Col} from 'react-bootstrap'

export class Projects extends Component {
    state={
        map:[1,1,1,1,1,1,1,1]
    }
    render() {
        return (
            <div className="body1">
                <Card className="bg-dark text-white " style={{marginBottom:'5px'}} >
  <Card.Img src="https://placehold.it/1000x270" alt="Card image" className="cards"/>
  <Card.ImgOverlay className='details'>

    <Card.Title className="text-center">Card title</Card.Title>
    <Card.Text className="text-center">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className="text-center"> Last updated 3 mins ago</Card.Text>
    
  </Card.ImgOverlay>
</Card>
<Row style={{padding: '0 10px'}}>
{this.state.map.map(data=>

<Col sm={6} style={{padding: '5px'}}>
<Card className="bg-dark text-white" >
  <Card.Img src="https://placehold.it/1920x1080" alt="Card image" />
  <Card.ImgOverlay className='details'>
  <Card.Title className="text-center">Card title</Card.Title>
    <Card.Text className="text-center">
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text className="text-center"> Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>

</Col>)}
</Row>
            </div>
        )
    }
}

export default Projects
