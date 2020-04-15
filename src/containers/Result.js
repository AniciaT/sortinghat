import React, { Component } from 'react';
import Message from '../components/Message';
import { connect } from 'react-redux';

function action() {
    return{
    type: 'UPDATE_CHOICE_WITH_MY_INDEX',
    indexSelected: Math.floor(Math.random()  *  4)
    }
}

class Result extends Component {
    constructor(props) {
        super(props);
        setInterval(() =>  this.props.dispatch(action()), 3000)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <ul>
                {this.props.houses.map(house => <li key={house}>{house}</li>)}
                </ul>
                <Message message={this.props.selectedHouse}  />
            </div>
        )
    }
}

export default connect(store=>store)(Result)