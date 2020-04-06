import React from 'react';

class Surname extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h3>{this.props.surname}</h3>
        )
    }
}

export default Surname;