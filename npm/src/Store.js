import StoreEvent from "./StoreEvent";
import AppDispatcher from "./Dispatcher";
import { EventEmitter } from "events";

const CHANGE_EVENT = "STORE_CHANGE";
const emitter = new EventEmitter();

export default class Store {
    constructor() {
        this.eventEmitter = emitter;
        this.events = {};

        // Call abstract method
        this.setup();

        // Dispatch
        this.dispatcherIndex = AppDispatcher.register((payload) => {
            const { type, data } = payload;
            const eventContainer = this.events[type];

            if (typeof(eventContainer) !== "undefined") {
                let executed = eventContainer.dispatch(data);

                if (typeof(executed) !== "undefined" && !executed) {
                    return false;
                }
            }

            // Emit store changes
            this.emitChange();

            return true;
        }.bind(this));
    }

    emitChange() {
        this.eventEmitter.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.eventEmitter.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.eventEmitter.removeListener(CHANGE_EVENT, callback);
    }

    subscribe(eventFunc, setupFunc) {
        // Setup events
        setupFunc((eventName) => {
            let eventSetting = this.events[eventName];

            if (typeof(eventSetting) === "undefined") {
                eventSetting = this.events[eventName] = new StoreEvent();
            }

            eventSetting.add(eventFunc);;
        }.bind(this));
    }
}