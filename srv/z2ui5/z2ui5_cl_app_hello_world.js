"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const z2ui5_cl_xml_view_1 = require("./z2ui5_cl_xml_view");
const z2ui5_if_client_1 = require("./z2ui5_if_client");
class z2ui5_cl_app_hello_world {
    constructor() {
        this.name = '';
        this.checkInitialized = false;
        this.client = new z2ui5_if_client_1.z2ui5_if_client();
    }
    main() {
        if (!this.checkInitialized) {
            this.checkInitialized = true;
            const view = new z2ui5_cl_xml_view_1.z2ui5_cl_xml_view();
            this.client.viewDisplay(view.factory()
                .shell()
                .page('abap2UI5 - Hello World')
                .simpleForm(true)
                .content('form')
                .title('Make an input here and send it to the server...')
                .label('Name')
                .input(this.client._bindEdit(this.name))
                .button('post', this.client._event('BUTTON_POST'))
                .stringify());
        }
        const event = this.client.get().event;
        switch (event) {
            case 'BUTTON_POST':
                this.client.messageBoxDisplay(`Your name is ${this.name}`);
                break;
            default:
                break;
        }
    }
}
// Usage
const app = new z2ui5_cl_app_hello_world();
app.main();
