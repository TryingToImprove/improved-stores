/** @JSX DOM */
import React from "react";

import TodoStore from "../../stores/TodoStore";
import TodoActions from "../../actions/TodoActions";

import TodoListComponent from "./TodoListComponent";
import TodoForm from "./TodoForm"

function getAppState() {
    return {
        todos: TodoStore.findAll()
    }
}

export default class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = getAppState();

        this.onChange = () => {
            this.setState(getAppState());
        }
    }

    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
    }

    componentDidUnmount() {
        TodoStore.removeChangeListener(this.onChange);
    }

    handleTodoSave(text) {
        TodoActions.create(text);
    }

    render() {
        const { todos } = this.state;

        return (
            <div>
                <TodoForm onSave={this.handleTodoSave} />

                <h1>Todo list</h1>
                <TodoListComponent todos={todos} />
            </div>
        );
    }
}