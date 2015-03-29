/** @JSX DOM */
import React from "react";
import TodoActions from "../../actions/TodoActions";

export default class Component extends React.Component {
    static propTypes = { todo: React.PropTypes.object.isRequired }

    constructor(props) {
        super(props);
    }

    handleRemoveClick(e) {
        const { todo } = this.props;

        TodoActions.remove(todo.id)

        e.preventDefault();
    }

    render() {
        const { todo } = this.props;

        return (
            <div>
                {todo.id} - {todo.text} <button onClick={this.handleRemoveClick.bind(this)}>Remove</button>
            </div>
        );
    }
}