import React from 'react';
import Signs from '../containers/Signs';

class Card extends React.Component {
    render() {
        console.log(this.props.sign)
        const name = this.props.sign
        return (
        <div>{name}
            <button>Yesterday</button>
            <button>Today</button>
            <button>Tomorrow</button>
        </div>
        )
    }
}

export default Card;