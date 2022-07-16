import React from "react";
import Todo from "../models/todo";

const TodosItem: React.FC<{
  item: Todo;
  onRemoveTodo: (event: React.MouseEvent) => void;
}> = (props) => {
  return (
    <li key={props.item.id} onClick={props.onRemoveTodo}>
      {props.item.text}
    </li>
  );
};

export default TodosItem;
