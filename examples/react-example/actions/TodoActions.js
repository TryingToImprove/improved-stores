import { AppDispatcher, Actions } from "improved-stores";

import TodoService from "../services/TodoService";

class TodoActions extends Actions {
    create(text) {
        TodoService.create(text)
            .then(this.completed("TODO::CREATE"), this.failed("TODO::CREATE"));
    }

    remove(id) {
        this.dispatch("TODO::REMOVE", {
            id: id
        });
    }
}

export default new TodoActions();