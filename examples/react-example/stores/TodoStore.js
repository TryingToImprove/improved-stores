import { Store } from "improved-stores";

let storage = [];

class TodoStore extends Store {
    setup() {
        this.subscribe(this.create, register => {
            register("TODO::CREATE");
        });

        this.subscribe(this.remove, register => {
            register("TODO::REMOVE");
        })
    }

    create(action) {
        storage.push({
            id: action.id,
            text: action.text
        });
    }

    remove(action) {
        storage = storage.filter((todo) => (todo.id !== action.id))
    }

    findAll() {
        return storage;
    }
}

export default new TodoStore();