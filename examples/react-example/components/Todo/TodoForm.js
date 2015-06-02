/** @JSX DOM */
import React from "react";

export default class Component extends React.Component {
    static propTypes = { onSave: React.PropTypes.func.isRequired }

    constructor(props) {
        super(props);

        this.setDefaultState();
    }

    setDefaultState() {
        this.state = { text: "" };
    }

    handleStateChange(stateName, value) {
        let state = this.state;
        state[stateName] = value;

        this.setState(state);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onSave(this.state.text);

        this.setDefaultState();
    }

    render() {
        const { text } = this.state;

        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" value={text} onChange={(e) => { this.handleStateChange("text", e.target.value) }.bind(this) } />
            </form>
        );
    }
}