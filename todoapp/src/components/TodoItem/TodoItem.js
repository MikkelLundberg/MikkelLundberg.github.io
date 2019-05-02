import React, {Component} from 'react';
import './TodoItem.css';

class TodoItem extends Component {


    constructor(props) {

        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

    }

    handleDelete = event => {
        this.props.deleteItem(this.props.text);
    };

    handleChange = event => {
        const {onValueChange} = this.props;
        onValueChange(this.props.id);
    };

    render() {
        return (
            <li className={"todoItem"}>
                <p>{this.props.text}</p>
                <div className={"checkAndDelete"}>
                    <input className={"checkBox"} type="checkbox" defaultChecked={this.props.isChecked} onChange={this.handleChange}/>
                    <button className={"deleteButton"} type={"button"} onClick={this.handleDelete}>Delete</button>
                </div>
            </li>
        );
    }
}

export default TodoItem;
