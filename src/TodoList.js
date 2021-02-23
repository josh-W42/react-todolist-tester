import ListItem from "./ListItem";
import './TodoList.css';

const TodoList = (props) => {

  let listItems = props.list.map((item, index) => ( 
    <ListItem key={index} value={item} />
  ));

  return (
    <div className="todo-list">
      <h1> Things I should stop procrastinating:</h1>
      <ul className="list">{listItems}</ul>
      <br></br>
      <form>
        <input type="text" placeholder="Type an item here." />
        <button>Add it</button>
      </form>
      <br></br>
      <form>
        <button>Finnished the list!</button>
      </form>
      <br></br>
    </div>
  );
}

export default TodoList;
