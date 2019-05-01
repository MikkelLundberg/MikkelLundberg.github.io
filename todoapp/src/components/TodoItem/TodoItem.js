import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {


    constructor(props) {

        super(props);
        this.state = {
            isChecked: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete(event) {
        this.props.deleteItem(this.props.text);
    }

    handleChange(event) {
        this.setState({isChecked: !this.state.isChecked});
    }

    render() {

        return (
            <li className={"todoItem"}>
                <p>{this.props.text}</p>
                <span className={"checkAndDelete"}>
                    <input className={"checkBox"} type="checkbox" value={this.state.isChecked}
                           onChange={this.handleChange}/>
                    <button className={"deleteButton"} type={"button"} onClick={this.handleDelete}>Delete</button>
                </span>
            </li>
        );
    }
}

export default TodoItem;
