import React, { Component } from 'react';

class Form extends Component {
    state = {
        firstname: "",
        lastname: "",
    };

    changeValueHandler = (e) => {
        this.setState ({
            [e.target.name]: e.target.value,
        });
    };

    submitHandler = () => {
        console.log('click');
        alert (
            'firstname :' + this.state.firstname + 
            '\nlastname :' + this.state.lastname,
        );
    };

    render() {
        return (
            <div>
            <form>
                <div>
                    <label htmlFor='firstname'>Firstname</label>
                    <input type='text' name='firstname' 
                    onChange={this.changeValueHandler}/>
                </div>
                <div>
                    <label htmlFor='lastname'>Lastname</label>
                    <input type='text' name='lastname'
                    onChange={this.changeValueHandler}/>
                </div>
                <input type='submit' onClick={this.submitHandler}/>
            </form>
                <p>Firstname : {this.state.firstname}</p>
                <p>Lastname : {this.state.lastname}</p>
            </div>
        );
    }
}

export default Form;