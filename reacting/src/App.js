import React, { Component } from "react";
import CountryCard from "./components/CountryCard";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper"
import countries from "./countries.json";
import shuffle from "shuffle-array";
import "./App.css";

// example of how to shuffle using npm package shuffle-array
// const example = [1,2,3,4];
// shuffle(example);
// console.log(example);

class App extends Component {
    state = {
        countries,
        count: 0,
        highest: 0,
        clicked: []
    };


    clicked = id => {
        const countries = this.shuffleCountries();
        this.setState({ countries });

        if (!this.state.clicked.includes(id)) {
            this.state.clicked.push(id);

            this.countMe();
            // console.log(this.state.clicked)
        }
        else {
            this.gameOver();
        }
    }

    // set time = () => (
        // thisetState({from: time1 })
    // )
    //everytime an image is clicked, the images will shuffle. 
    shuffleCountries = () => {
        const shuffleCountries = shuffle(this.state.countries)
        return shuffleCountries;
    }

    // counter to keep the score of the user while the game in on. 
    countMe = () => {
        this.setState({ count: this.state.count + 1 })
        // console.log("hello");
    }

    //the game will stop once the user 
    gameOver = () => {
        this.setState({
            count: 0,
            clicked: [],
        })
        if (this.state.count > this.state.highest) {
            this.setState({
                highest: this.state.count
            })
            alert("Game Over! New high score!");
        } else {
            alert("Game Over! Try Again!");
        }
    }

    render() {
        return (
            <Wrapper>
                <Header
                    count={this.state.count}
                    highest={this.state.highest} />
                {this.state.countries.map(country => (
                    <CountryCard
                        clicked={this.clicked}
                        key={CountryCard.id}
                        {...country}
                    />
                ))}
            </Wrapper>
            // <Wrapper>
            //     <Header
            //         count={this.state.count}
            //         highest={this.state.highest} />
            //     <div className="container">
            //         {this.state.countries.map(country => (
            //             <CountryCard
            //                 clicked={this.clicked}
            //                 key={country.id}
            //                 {...country}
            //             />
            //         ))}
            //     </div>
            // </Wrapper>
        );
    }
}

export default App;