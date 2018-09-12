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
  
  mascotClick = (event) => {
   console.log("this was clicked");
   console.log(event);
   console.log(event.target);
   console.log(event.target.id);
 
   var id = event.target.id;
 
   var mascotsArray = this.state.mascots;
 
   var shuffledMascotsArray = this.shuffleMascots(mascotsArray)
   console.log(shuffledMascotsArray);
 
  this.findMascotById(shuffledMascotsArray, id)
  }
  
 shuffleMascots = (array) => {
     for (var i = array.length - 1; i > 0; i--) {
       var j = Math.floor(Math.random() * (i + 1));
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
     }
     return array
 }

 findMascotById = (array, id) => {
  //first create an empty array
  var newMascotArray = [];
  var doubleClickedMascot = false;
  //sort through this.state.mascots and find the correct mascot id
  for (let i = 0; i < array.length; i++) {
    if (array[i].id === parseInt(id)) {
      if (array[i].picked !== true) {
        //update that mascot and say it was clicked on
        array[i].picked = true;
        //and then push it into the array
        newMascotArray.push(array[i])
        this.setState({
          currentScore: this.state.currentScore++
        });
        
      }else {
        doubleClickedMascot = true
      }
    } else {
      //else push the mascot into the array
      newMascotArray.push(array[i])
    }
    if(doubleClickedMascot){
      this.setState({
        mascots: [{
            "id": 1,
            "picked": false,
            "name": "Poe",
            "image": "https://thefootbawlblog.files.wordpress.com/2012/03/ravens-mascot-430a081108.jpg",
            "occupation": "Baltimore Ravens Mascot",
            "location": "Baltimore, MD"
          },
          {
            "id": 2,
            "picked": false,
            "name": "Billy Buffalo",
            "image": "https://cdn-s3.si.com/s3fs-public/images/Buffalo-Bills-mascot-Billy-Buffalo.jpg",
            "occupation": "Buffalo Bills Mascot",
            "location": "Buffalo, NY"
          },
          {
            "id": 3,
            "picked": false,
            "name": "Who Dey",
            "image": "https://cdn-s3.si.com/s3fs-public/images/Cincinnati-Bengals-Who-Dey.jpg",
            "occupation": "Cincinnati Bengals Mascot",
            "location": "Cincinnati, OH"
          },
          {
            "id": 4,
            "picked": false,
            "name": "Miles",
            "image": "https://imagesvc.timeincapp.com/v3/fan/image?url=https://predominantlyorange.com/wp-content/blogs.dir/46/files/2016/01/nfl-san-diego-chargers-denver-broncos-5-300x600.jpg&c=sc&w=300&h=438",
            "occupation": "Denver Broncos Mascot",
            "location": "Denver, CO"
          },
          {
            "id": 5,
            "picked": false,
            "name": "Toro",
            "image": "https://i.pinimg.com/originals/e5/61/f9/e561f9b392d22cb4786d8fe8ba2fbfb6.jpg",
            "occupation": "Houston Texans Mascot",
            "location": "Houston, TX"
          },
          {
            "id": 6,
            "picked": false,
            "name": "Blue",
            "image": "https://cdn-s3.si.com/s3fs-public/images/Indianapolis-Colts-mascot-Blue.jpg",
            "occupation": "Indianapolis Colts Mascot",
            "location": "Indianapolis, IN"
          },
          {
            "id": 7,
            "picked": false,
            "name": "Jaxson De Ville",
            "image": "https://i.pinimg.com/originals/0f/11/80/0f11803b80545a94c618afe90fdd107c.jpg",
            "occupation": "Jacksonville Jaguars Mascot",
            "location": "Jacksonville, FL"
          },
          {
            "id": 8,
            "picked": false,
            "name": "Boltman",
            "image": "https://www.totalprosports.com/wp-content/uploads/2014/09/boltman-2.jpg",
            "occupation": "Los Angeles Chargers Mascott",
            "location": "Los Angeles, CA"
          },
          {
            "id": 9,
            "picked": false,
            "name": "Rampage",
            "image": "https://i.pinimg.com/originals/55/b9/6b/55b96b86580de1b88349c68946cda717.jpg",
            "occupation": "Los Angeles Rams Mascot",
            "location": "Los Angeles, CA"
          },
          {
            "id": 10,
            "picked": false,
            "name": "Viktor",
            "image": "https://media.gettyimages.com/photos/minnesota-vikings-mascot-viktor-the-viking-picture-id852275460",
            "occupation": "Minnesota Vikings Mascot",
            "location": "Minneapolis, MN"
          },
          {
            "id": 11,
            "picked": false,
            "name": "Big Red",
            "image": "https://i.pinimg.com/originals/df/30/0e/df300ed7f54d542e193c38e0701ff7a3.jpg",
            "occupation": "Arizona Cardinals Mascot",
            "location": "Phoenix, AZ"
          },
          {
            "id": 12,
            "picked": false,
            "name": "Stealy McBeam",
            "image": "https://3.bp.blogspot.com/-5MFprE2tj1o/TwKG5tvUUiI/AAAAAAAACbk/klkyQfbt2NA/s1600/Steelers_Mascot.jpg",
            "occupation": "Pittsburgh Steelers Mascot",
            "location": "Pittsburgh, PA"
          },
          {
            "id": 13,
            "picked": false,
            "name": "Raider Rusher",
            "image": "https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-s3.si.com%2Fs3fs-public%2Fimages%2FOakland-Raiders-mascot-Raider-Rusher.jpg&w=1100&q=85",
            "occupation": "Oakland Raiders Mascot",
            "location": "Oakland, CA"
          },
          {
            "id": 14,
            "picked": false,
            "name": "T-Rac",
            "image": "https://i.pinimg.com/originals/42/a6/cd/42a6cdc734a75346077c7c215d7c3ca1.jpg",
            "occupation": "Tennessee Titans Mascot",
            "location": "Nashville, TN"
          },
          {
            "id": 15,
            "picked": false,
            "name": "Sourdough Sam",
            "image": "https://i.pinimg.com/originals/56/70/51/567051d7c0ef73802aaaf2d55de65863.jpg",
            "occupation": "Tennessee Titans Mascot",
            "location": "Nashville, TN"
          }
        ],
        currentScore: 0
      });
    }else{
      console.log(this.state.currentScore);
      this.setState({
        mascots: newMascotArray,
        currentScore: this.state.currentScore++
      });
    }
  }

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
              mascotClick={this.mascotClick}
            />
            ))}
        </Wrapper>
      <Footer />
    </div>
    );
  }
}

export default App;
