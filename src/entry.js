import Store from "./Store";
import Dispatcher from "./Dispatcher";
import Actions from "./Actions";

export default {
    Store: Store,
    Dispatcher: Dispatcher,
    Actions: Actions,
    dispatch: (event, payload) => {
        Dispatcher.dispatch({
            type: event,
            data: payload
        });
    }
};