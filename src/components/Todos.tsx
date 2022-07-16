import React from "react";
import Todo from "../models/todo";
import TodosItem from "./TodosItem";

const Todos: React.FC<{items : Todo[]}> = (props) => {
  return (
    <ul>
      {props.items.map(item => <TodosItem item={item} /> )}
    </ul>
  );
}
export default Todos;
