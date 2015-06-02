import Dispatcher from "./Dispatcher";

export default class Actions {
    completed(eventName) {
        return function() {
            const args = Array.prototype.slice.call(arguments);
            args.unshift(eventName);

            this.dispatch.apply(this, args);
        }.bind(this)
    }

    failed(data) {
        return function() {
            const args = Array.prototype.slice.call(arguments);
            args.unshift(eventName);

            this.dispatch.apply(this, args);
        }.bind(this)
    }

    dispatch(eventName, payload) {
         Dispatcher.dispatch({
            type: eventName,
            data: payload
        });
    }
}