import { Store } from "improved-stores";

export default class TodoStore extends Store {
    static STORAGE = {};

    setup() {
        this.subscribe(this.create, register => {
            register("TODO::CREATE");
        });

        this.subscribe(this.remove, register => {
            register("TODO::REMOVE");
        })
    }

    create(action) {
        TodoStore.STORAGE[action.id] = {
            id: action.id,
            text: action.text
        };
    }

    remove(action) {
        delete TodoStore.STORAGE[action.id];
    }

    findAll() {
        return Object.keys(TodoStore.STORAGE)
                     .map(key => TodoStore.STORAGE[key]);
    }
}