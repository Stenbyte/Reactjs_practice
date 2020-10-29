import React, {Component} from 'react';
import Animal from './Component/Animal/Animal'
import './App.css';

class App extends Component {
  state = {
    animals:[
      {name:'Cat', img:'https://images.theconversation.com/files/336248/original/file-20200520-152302-97x8pw.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=675.0&fit=crop'},
      {name:'Rabbit', img: 'https://ca-times.brightspotcdn.com/dims4/default/6b1d62d/2147483647/strip/true/crop/5472x2873+0+388/resize/1200x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F97%2F84%2F9b4346d140fea9da8d08ebf71011%2Fla-tr-travel-sacramento-refuge-24.JPG'},
      {name:'Wolf', img:'https://www.nwf.org/-/media/NEW-WEBSITE/Shared-Folder/Wildlife/Mammals/mammal_gray-wolf_600x300.ashx'},
    ]
  };



  render() {
    return (
      <div className='cards'>
        <Animal 
        name = {this.state.animals[0].name}
        img = {this.state.animals[0].img}
        />
        <Animal 
        name = {this.state.animals[1].name}
        img = {this.state.animals[1].img}
        />
        <Animal 
        name = {this.state.animals[2].name}
        img = {this.state.animals[2].img}
        />

      
      </div>
    );
  }
}

export default App;
