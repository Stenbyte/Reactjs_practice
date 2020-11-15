import React, { Component } from 'react';
import './View.css'

class View extends Component {
    render() {
        return (
            <div className='view'>
                <div className='box'>
                    <h1>This is your input</h1>
                    <p id='firstName'className='cl'>Firstname : {this.props.firstName}</p>
                    <p id='lastName'className='cl'>Lastname : {this.props.lastName}</p>
                    <p id='phoneNumber'className='cl'>Phone number : {this.props.phoneNumber}</p>
                    <p id='role'className='cl'>Role: {this.props.role}</p>
                    <p id='message'className='cl'>Message: {this.props.message}</p>
                </div>
            </div>
        );
    }
}

export default View;