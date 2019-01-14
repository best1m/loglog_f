import React, { Component } from 'react';
import 'scss/components/cardContainer.scss';

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
         <div className="ll-cardContainer">
            {cards.map(card =>  
                <div className="ll-card">
                <div className="ll-imageBox"></div>
                    {card.name}
                </div>
            )}
         </div>
        )
    }
}

export default CardContainer;