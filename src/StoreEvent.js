export default class StoreEvent {
    constructor() {
        this.funcs = [];
    }

    add(func) {
        this.funcs.push(func);
    }

    dispatch(action) {
        this.funcs.forEach(func => {
            func.call(this, action);
        });
    }
}