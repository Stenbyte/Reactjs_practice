import React, { Component } from 'react';
import './Section.css';

class Section extends Component {
    state = {
        votes: 0,
    };

    addHandler = () => {
        console.log('boom boom')
        this.setState({
            votes: this.state.votes + 1,
        });
    };
    readMoreHandler = () => {
        console.log('You want to read more???');
    };
    

    render() {
        return (
            <div className='sec'>
                <img alt='hero' src='https://en.bc.fi/wp-content/uploads/sites/14/2019/01/laptop.jpg' />
                <h2>Full Stack Web Developer Program</h2>
                <p>
                Full Stack Web Developer program is designed for adults who want to
                work as software developers. Studying in the program is very practical
                in comparison to academic studying. The studies focus 100 % on getting
                the core skills needed as software developer.
                </p>
                <p> {this.state.votes} :people like this article</p>
                <button onClick={this.readMoreHandler}>Read more</button>
                <button onClick={this.addHandler}>Give a vote</button>
            </div>
        );
    }
}

export default Section;