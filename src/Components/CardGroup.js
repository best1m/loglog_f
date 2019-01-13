import React, { Component } from 'react';

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
         <div>
            {cards.map(card =>  
                <div>
                    {card.name}
                </div>
            )}
         </div>
        )
    }
}

export default CardGroup;