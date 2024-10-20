// z2ui5_cl_app_hello_world.ts
class z2ui5_cl_app_hello_world {
    private client: any;
    private name: string;

    constructor(client: any) {
        this.client = client;
        this.name = '';
    }

    main() {
        return;
        this.client.view.factory()
            .shell()
            .page('abap2UI5 - Hello World')
            .simpleForm(true)
            .content('form')
            .title('Make an input here and send it to the server...')
            .label('Name')
            .input(this.client._bindEdit(this.name))
            .button('post', this.client._event('BUTTON_POST'))
            .stringify();

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

module.exports = { z2ui5_cl_app_hello_world };