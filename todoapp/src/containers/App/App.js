import React, {Component} from 'react';
import TodoList from "../TodoList/TodoList";
import './App.css';
import WelcomeText from "../../components/WelcomeText/WelcomeText";
import {InputBox} from "../../components/InputBox/InputBox";

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }


    deleteItem(name) {

    }

    addTodo(todo) {
        const {todos} = this.state;
        const list = [...todos, todo];
        this.setState({todos: list});
    }

    toggleTodo(id) {
        const {todos} = this.state;
        const todo = todos.filter((t) => t.id === id)[0];
        todo.isChecked = !todo.isChecked;
        const rest = todos.filter((t) => t.id !== id);
        const newTodos = [...rest, todo];
        this.setState({todos: newTodos});
    }

    render() {
        const {todos} = this.state;
        const untickedTodos = todos.filter((todo) => !todo.isChecked);
        const tickedTodos = todos.filter((todo) => todo.isChecked);
        return (

            <div className={"app"}>
                <WelcomeText/>
                <InputBox onClick={this.addTodo}/>
                <TodoList className={"todoMakers tickedTodos"}
                          key={"tickedTodos"}
                          todos={tickedTodos}
                          headliner={"Completed Todos! :"}
                          deleteItem={this.deleteItem()}
                          onToggle={this.toggleTodo}/>
                <div className={"todoContainer"}>


                    <TodoList className={"todoMakers untickedTodos"}
                              key={"untickedTodos"}
                              todos={untickedTodos}
                              deleteItem={this.deleteItem()}
                              onToggle={this.toggleTodo}
                              headliner={"Todos! :"}/>

                </div>

            </div>

        );
    }
}

export default App;
