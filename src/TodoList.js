import ListItem from "./ListItem";

const TodoList = (props) => {

  let listItems = props.list.map((item, index) => ( 
    <ListItem key={index} value={item} />
  ));

  return (
    <div className="todo-list">
      <h1> Things I should stop procrastinating:</h1>
      <ul>{listItems}</ul>
    </div>
  );
}

export default TodoList;
