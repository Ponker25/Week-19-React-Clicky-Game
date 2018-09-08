import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import MascotCard from "./components/MascotCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer"
// import Title from "./components/Title";
import mascots from "./mascots.json";
import "./App.css";


class App extends Component {
  // setting this.state.mascots to the mascots json array
  state = {
    mascots: mascots,
    currentScore: 0,
    topScore: 0,
    clickedMascots: [],
    modalShow: false
  };

  // removeMascot = id => {
  //   const mascots= this.state.mascots.filter(mascot => mascot.id !== id);
  //   this.setState({mascots});
  // };
  
 shuffleMascots = () => {
   const mascots = [].concat(this.state.mascots);
   for(let i = mascots.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [mascots[i], mascots[j]] = [mascots[j], mascots[i]];
   }
   this.setState({ mascots });
 }
 
 maascotClick = () => {

 }

  render() {
    return (
      <div>
      <Navbar />
          <Wrapper>
          {this.state.mascots.map(mascot => (
            <MascotCard
              image={mascot.image}
              id={mascot.id}
              key={mascot.id}
              picked={mascot.picked}
            />
            ))}
        </Wrapper>
      <Footer />
    </div>
    );
  }
}

export default App;
