import { Store } from "improved-stores";

class PatientStore extends Store {
    setup() {
        this.subscribe(this.onDataFetched, (register) => {
                register("PatientConstants.ADDRESS_FIND_BY_ID");
            });
    }

    onDataFetched(action, dispatcher) {
        console.log("PatientStore", action);
    }
}

export default new PatientStore();