import React from "react";
import Todo from "../models/todo";

const TodosItem : React.FC< {item : Todo}> = (props) => {
    return (
        <li key={props.item.id}>
            {props.item.text}
        </li>
    );
};

export default TodosItem;