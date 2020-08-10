import React from 'react';
import Signs from '../containers/Signs';

class Card extends React.Component {
    render() {
        console.log(this.props.sign)
        const name = this.props.sign
        return (
        <div>{name}</div>
        )
    }
}

export default Card;