import React, { Component } from 'react'
import CardsForMarbles from '../Cards/CardsForMarbles'
import { Row, Container} from 'react-bootstrap'
export default class Marble extends Component {
   
  render() {
    console.log('----marbles-----')
    console.log(this.props.marbles);
    var marbles = this.props.marbles.map( item => {
      
      return <CardsForMarbles title={item.title} description={item.description} img={item.img}/>
    })
    return (    
      <div className="body1">
<Container>
      <Row>
         {marbles}
         </Row>
         </Container>
         </div>      
    

    )
  }
}