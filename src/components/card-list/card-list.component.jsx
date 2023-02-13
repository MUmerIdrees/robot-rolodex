//import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ robots }) => (
    <div className='card-list'>
        {robots.map((robot) => {
            return <Card robot={robot} />;
        })}
    </div>
);

/*class CardList extends Component {
    render() {
        const { robots } = this.props;

        return (
            <div className='card-list'>
                {robots.map((robot) => {
                    return <Card robot={robot} />;
                })}
            </div>
        );
    }
}*/

export default CardList;
