import React from "react";
import Todo from "../models/todo";
import TodosItem from "./TodosItem";

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id:string) => void }> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodosItem item={item} onRemoveTodo={props.onRemoveTodo.bind(null,item.id)} />
      ))}
    </ul>
  );
};
export default Todos;
