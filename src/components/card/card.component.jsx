//import { Component } from "react";

import './card.styles.css';

const Card = ({ robot }) => {
    const { name, email, id } = robot; 
    return (
        <div className='card-container' key={id}>
            <img 
                alt={`robot ${name}`} 
                src={`https://robohash.org/${id}?set=set1&size=180x180`} 
            />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

/*class Card extends Component {
    render() {
        const { name, email, id } = this.props.robot; 
        return (
            <div className='card-container' key={id}>
                <img 
                    alt={`robot ${name}`} 
                    src={`https://robohash.org/${id}?set=set2&size=180x180`} 
                />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}*/

export default Card;
