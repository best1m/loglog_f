import React, { Component } from 'react';
import {Card, Icon, Image} from 'semantic-ui-react';

class CardGroup extends Component {

    state = {
        name : 'kim'
    }

    render(){

            return(
            <Card.Group>
            <Card>
            <Image src='https://i.pinimg.com/originals/aa/c2/28/aac2287892f3116ff2b496f552802663.jpg' />
            <Card.Content>
              <Card.Header>{this.state.name}</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
       </Card.Group>
        )
    }
}

export default CardGroup;