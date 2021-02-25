const ListItem = (props) => {
  return (
    <>
      <li>
        <p>{props.value}</p>
        <button onClick={props.remove}>Remove</button>
      </li>
      <hr/>
    </>
  )
}

export default ListItem;