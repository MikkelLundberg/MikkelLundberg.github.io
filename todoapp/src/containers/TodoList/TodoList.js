import React from 'react';
import TodoItem from "../../components/TodoItem/TodoItem";
import './Todolist.css'

function TodoList(props) {
    const list = props.todos.map(todo => <TodoItem id={todo.id} key={todo.id} text={todo.value}
                                                onValueChange={props.onToggle} isChecked={todo.isChecked}/>);
    return (
        <div className={"TodoList"}>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default TodoList;
