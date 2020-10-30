import React, { Component } from 'react';

class Circle extends Component {
    render() {
        const { isEven, color, likes } = this.props
        return (
            <div 
            style={{ background: color}}
            className={'myClass' + (isEven ? 'even' : 'odd')}
            >
                Total likes : {likes}
            </div>
        );
    }
}

export default Circle;