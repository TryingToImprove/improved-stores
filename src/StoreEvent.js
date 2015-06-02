export default class StoreEvent {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.funcs = [];
    }

    add(func) {
        this.funcs.push(func);
    }

    dispatch(context, action) {
        const invoke = (func) => func.call(context, action, this.dispatcher);

        this.funcs.forEach(invoke);
    }
}