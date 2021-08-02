import React from 'react';
import SearchBox from "./SearchBox";

let done = true;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            searchField: '',
            parag: ''
        }
    }
    searchChange = (event) => {
        this.setState({ searchField: event.target.value });
    }
    solve = () => {
        fetch(`http://numbersapi.com/${this.state.searchField}`).then(res => res.text()).then(data => this.setState({ parag: data }));
        done = /^\d+$/.test(this.state.searchField);
    }

    render() {
        if (done === true) {
            return (
                <div className='tc'>
                    <h1 style={{ fontSize: 80 }}>Numbers Facts</h1>
                    <h3 style={{ fontWeight: 600 }}>Interesting facts about numbers!</h3>
                    <p style={{ fontWeight: 400, fontSize: 25 }}>Enter a random number and it will display a fact related to that number.</p>
                    <SearchBox searchChange={this.searchChange} solve={this.solve} />
                    <h3>{this.state.parag}</h3>
                </div>
            );
        }
        else {
            return (
                <div className='tc'>
                    <h1 style={{ fontSize: 80 }}>Numbers Facts</h1>
                    <h3 style={{ fontWeight: 600 }}>Interesting facts about numbers!</h3>
                    <p style={{ fontWeight: 400, fontSize: 25 }}>Enter a random number and it will display a fact related to that number.</p>
                    <SearchBox searchChange={this.searchChange} solve={this.solve} />
                    <h1>Opss! Your input is not a number.</h1>
                </div>
            );
        }
    }
}

export default App;