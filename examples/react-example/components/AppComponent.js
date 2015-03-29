/** @JSX DOM */
import React from "react";

import TodoView from "./Todo";

export default class Component extends React.Component {
    render() {
        return (
            <div>
                <TodoView />
            </div>
        );
    }
}