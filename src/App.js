import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = { 
      counters: [
        {id: 0, value: 0},
        {id: 1, value: 1},
        {id: 2, value: 2},
        {id: 3, value: 3},
      ]
  }

  handleReset = () => {
    const counters = this.state.counters.map( c=> {
      c.value = 0;
      return c;
    })

    this.setState({ counters });
  }

  handleDelete = (counterId) => {
    console.log('Event handler called', counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);

    this.setState({counters: counters});
    // Equivalent to:
    //this.setState({counters});
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);

    counters[index] = {...counter};
    counters[index].value++;

    this.setState({counters});
  }

  render() { 
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDelete={this.handleDelete} />
      </main>
      </React.Fragment>
    );
  }
}
 
export default App;