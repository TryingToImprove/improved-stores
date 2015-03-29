/** @JSX DOM */
import React from "react";
import TodoItem from "./TodoItem";

export default class Component extends React.Component {
    static propTypes = { todos: React.PropTypes.array.isRequired }

    render() {
        var todos = this.props.todos.map((todo, index) => {
            return (<TodoItem key={index} todo={todo} />);
        });

        return (
            <div>
                {todos}
            </div>
        );
    }
}