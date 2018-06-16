import React, { Component } from 'react';
import cards from './parks.json'; 
import Wrapper from './components/Wrapper'; 
import Card from './components/Card';
import Header from './components/Header'; 
import './App.css';

class App extends Component {
  state = {
    cards, 
    score: 0,
    highscore: 0
  }; 
  
  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.clicked = false;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    //this.setState(this.card.clickCount = 0)
    return true;
  }



  clickCount = id => {
    console.log("got here")
    let success = false;

    this.state.cards.map(card => {
      if(card.id === id) {
        if(!card.clicked) {
          card.clicked = true;
          console.log("got here2") 
          success = true; 
        }
      }
      return card
    })
    if (success === true) {
      this.setState({score: this.state.score+1}); 
      this.state.cards.sort(() => Math.random() - 0.5)
    } else {
      this.gameOver(); 
       }
  }


  render() {
    return (
      <Wrapper>
        <Header>
          <h1>Don't Double Tap Ron</h1>
          Score: {this.state.score} High Score: {this.state.highscore}
        </Header>
        
         {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
     </Wrapper>
    );
  }
}

export default App;
