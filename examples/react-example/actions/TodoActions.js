import { Dispatcher } from "improved-stores";

export default {
    create(text) {
        Dispatcher.dispatch({
            type: "TODO::CREATE",
            data: {
                id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
                text: text
            }
        })
    },

    remove(id) {
        Dispatcher.dispatch({
            type: "TODO::REMOVE",
            data: {
                id: id
            }
        })
    }
}