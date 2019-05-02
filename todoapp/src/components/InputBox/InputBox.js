import React, {Component} from 'react';
import * as PropTypes from "prop-types";
const uuidv1 = require('uuid/v1');

export class InputBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: []
        };
    }

    handleChange = event => {
        this.setState({input: event.target.value});
    };

    createTodo = () => {
        const {onClick} = this.props;
        onClick({"id": uuidv1(), value: this.state.input, isChecked: false})
    };

    render() {
        return <div className={"todoMakers"}>
            <h2>Create a Todo here!</h2>
            <button className={"createButton"} type={"button"} onClick={this.createTodo}>Create</button>
            <input className={"textFelt"} type="text" onChange={this.handleChange}/>
        </div>;
    }
}

InputBox.propTypes = {
    onClick: PropTypes.func,
    onChange: PropTypes.func
};
