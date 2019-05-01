import React, {Component} from 'react';
import TodoList from "../TodoList/TodoList";
import './App.css';

class App extends Component {


    constructor(props) {

        super(props);
        this.state = {
            isChecked:false
        };
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {
        return (
            <div className={"app"}>

                <TodoList/>

            </div>

    );
    }
}

export default App;
