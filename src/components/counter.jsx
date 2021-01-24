import React, { Component } from 'react';

class Counter extends Component {
  // Now counter is controlled by parent
  state = {
    //value: this.props.counter.value,
    tags: ['tag1', 'tag2', 'tag3']
  };

  /*constructor() {
    super();
    // Without this line this does not exists inside handleIncrement
    // If it is an arrow function we does not need the next line
    //this.handleIncrement = this.handleIncrement.bind(this);
  }*/

  /*handleIncrement = (product) => {
    //console.log(product);
    this.setState({ value: this.state.value + 1 });
  }*/

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>

    return (
      <ul>
        {this.state.tags.map( tag => <li key={tag}>{tag}</li>)}
      </ul>
    );
  }

  render() {
    //console.log('props', this.props);

    return (
      <React.Fragment>
        { this.props.children }
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button onClick={ () => this.props.onIncrement( this.props.counter )} className="btn btn-secondary btn-sm">Increment</button>
        {this.renderTags()}
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    //classes += (this.state.value === 0) ? "warning" : "primary";
    classes += (this.props.counter.value === 0) ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? 'Zero' : count;
    //return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}
 
export default Counter;