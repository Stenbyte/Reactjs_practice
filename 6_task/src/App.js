import React, { Component } from 'react';
import Form from './Component/Form/Form';
import View from './Component/View/View';



class App extends Component {
  constructor(props){
        super(props);
        this.state = {
          firstName: '',
          lastName: '',
          phoneNumber: '',
          role: '',
          message: ''
        }
  }

  onChangeHandler = (e) => {
    this.setState({
          [e.target.id]: e.target.value
    })
  }



  render() {
    return (
      <div>
        <Form onChangeHandler={this.onChangeHandler}/>
        <View 
        firstName={this.state.firstName} 
        lastName={this.state.lastName}
        phoneNumber={this.state.phoneNumber}
        role={this.state.role}
        message={this.state.message}
        />
      </div>
    );
  }
}

export default App;