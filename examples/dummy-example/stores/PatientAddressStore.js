import { Store } from "improved-stores";

class PatientAddressStore extends Store {
    setup() {
        this.subscribe(this.onDataFetched, (register) => {
                register("PatientConstants.ADDRESS_FIND_ALL");
                register("PatientConstants.ADDRESS_FIND_BY_ID");
            });

        this.subscribe(this.onDataFetched, (register) => {
                register("PatientConstants.ADDRESS_FIND_ALL");
            });
    }

    onDataFetched(action) {
        console.log("PatientAddressStore", action);
    }
}

export default new PatientAddressStore();