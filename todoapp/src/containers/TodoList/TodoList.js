import React, {Component} from 'react';
import TodoItem from "../../components/TodoItem/TodoItem";
import './Todolist.css'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            text: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.addTodo = this.addTodo.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }


    addTodo() {
        const {todos, text} = this.state;
        const list = [...todos, text];
        this.setState({todos: list});
    }

    deleteItem(name) {
        const {todos} = this.state;
        const list = todos.filter((todo) => !(todo === name));
        this.setState({todos: list});
    }
//Im very happy that i got so far :D
    render() {

        const list = this.state.todos.map(todo => <TodoItem key={todo} text={todo} deleteItem={this.deleteItem}/>);

        return (
            <div>
                <h1>Welcome to this TodoApp!</h1>
                <h4>This TodoApp is made by Mikkel Lundberg</h4>
                <div className={"todoMakers"}>
                    <button type={"button"} onClick={this.addTodo}>Create</button>
                    <input className={"textFelt"} type="text" onChange={this.handleChange}/>
                </div>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

export default TodoList;
