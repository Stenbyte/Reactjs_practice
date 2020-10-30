import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Circle from './Component/Circle';

class App extends Component {
state = {
  likes: 0,
  curTime :new Date().toLocaleString(),
};

addHandler = () => {
  
  this.setState({likes: this.state.likes + 1 });
}
removeHandler = () => {
  if(this.state.likes <= 0) {
    this.setState ({
      likes:0
    });
  } else {
    this.setState ({
      likes: this.state.likes - 1
    });
  }
}
resetHandler = () => {
  this.setState({ likes: 0 });
}

  render() {
    const isEven = this.state.likes % 2 === 0
    const bgColor = isEven ? 'red' : 'yellow'

    return (
      <div className='Ap'>
          <Header  />
          <p>{this.state.curTime}</p>
        <div className='circle'>
          <div>
            <Circle  isEven={isEven} likes={this.state.likes} color={bgColor}/>
          {/* <h1>Total Likes: {this.state.likes} </h1> */}
          <button onClick={this.addHandler}>Add one</button>
          <button onClick={this.removeHandler}>Remove one</button>
          <button onClick={this.resetHandler}>Reset</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;