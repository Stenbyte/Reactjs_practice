import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    render() {
        return (
            <form>
                <p>
                    <label htmlFor='firstname'>Firstname: </label>
                    <input type='text' name='firstname' id='firstName' 
                    onChange={this.props.onChangeHandler} />
                </p>
                <p>
                    <label htmlFor='lastname'>Lastname: </label>
                    <input type='text' name='lastname'id='lastName'
                    onChange={this.props.onChangeHandler}/>
                </p>
                <p>
                    <label htmlFor='phone' >Phone number: </label>
                    <input type='number' name='phone' id='phoneNumber'
                    onChange={this.props.onChangeHandler}/>
                </p>
                <p>
                    <label htmlFor='role'>Role: </label>
                    <select type='text' name='role' id='role'
                    onChange={this.props.onChangeHandler}>
                        <option>.....</option>
                        <option>CEO</option>
                        <option>HR</option>
                        <option>Usual worker</option>
                    </select>
                </p>
                <p>
                    <label htmlFor='message'>Message: </label>
                    <input type='text-area' name='message' id='message'
                    onChange={this.props.onChangeHandler}/>
                </p>
            </form>
        );
    }
}

export default Form;