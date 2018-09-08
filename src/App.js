import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import MascotCard from "./components/MascotCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
import Title from "./components/Title";
import friends from "./friends.json";

// import Logo from "./logos.json";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  // setting this.state.friends to the friends json array
  state = {
    friends
  };

  removeMascot = id => {
    const friends= this.state.friends.filter(friend => friend.id !== id);
    this.setState({friends});
  };

  render() {
    return (
      <div>
      <Navbar />
      <Wrapper>
          {/* <Title>NFL Mascot Clicky-Game</Title> */}
          {this.state.friends.map(friend => (
            <MascotCard
              image={friend.image}
            />
            ))}
          </Wrapper>
      <Footer />
    </div>
    );
  }
}

export default App;
