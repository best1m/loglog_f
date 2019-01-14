import React, { Component } from 'react';

class CardContainer extends Component {

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
                <div className="ll-card">
                    {card.name}
                </div>
            )}
         </div>
        )
    }
}

export default CardContainer;