import React from 'react';
import './TodoList.css';
import ListItem from "./ListItem";

class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      input: ''
    }
  }

  updateInput = e => {
    const input = e.target.value;
    this.setState({ input });
  }

  addToList = () => {
    const list = this.state.list.concat([this.state.input]);
    this.setState({ list });
  }

  clearList = () => {
    this.setState({ list: [] });
  }

  removeFromList = (index) => {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({ list });
  }

  render() {
    const listArray = this.state.list.map((item, i) => {
      return <ListItem key={i} remove={() => this.removeFromList(i)} value={item} />;
    });

    return (
      <div className="todo-list">
        <h1> Things I should stop procrastinating:</h1>
        <ul className="list">{listArray}</ul>
        <br></br>
        <div>
          <input onChange={this.updateInput} type="text" placeholder="Type an item here." />
          <button onClick={this.addToList}> Add it</button>
        </div>
        <br></br>
        <div>
          <button onClick={this.clearList}>Finnished the list!</button>
        </div> 
        <br></br>
      </div>
    );
  }

}

export default TodoList;
