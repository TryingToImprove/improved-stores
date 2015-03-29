import { Dispatcher } from "improved-stores";

import PatientAddressStore from "./stores/PatientAddressStore";
import PatientStore from "./stores/PatientStore";

var createButton = (type, action) => {
    var btn = document.createElement("button");
    btn.innerText = "Test";
    btn.addEventListener("click", (e) => {
        Dispatcher.dispatch({
            type: type,
            action: action
        });

        e.preventDefault();
    }, false)

    return btn;
}

document.body.appendChild(createButton("PatientConstants.ADDRESS_FIND_ALL", { test: "TEST"}));
document.body.appendChild(createButton("PatientConstants.ADDRESS_FIND_BY_ID", { test: "ADDRESS_FIND_BY_ID"}));