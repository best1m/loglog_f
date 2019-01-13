import React, { Component } from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

class CardGroup extends Component {

    state = {
        cards : [
            { name : 'kim'},
            { name : 'lee'},
            { name : 'park'},
            { name : 'choi'},
            { name : 'moon'},
            { name : 'bang'},
        ]
    }

    render(){
        const {cards} = this.state

            return(
         <Card.Group>
            {cards.map(card =>  
            <Card>
                <Image src='https://designshack.net/wp-content/uploads/16-9.jpg' />
                <Card.Content>
                  <Card.Header>{card.name}</Card.Header>
                  <Card.Meta>
                    <span>Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
                </Card.Content>
            </Card> )}
         </Card.Group>
        )
    }
}

export default CardGroup;