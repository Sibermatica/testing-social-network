class Account {

    constructor(json) {
        this.json = json;

        // Some tests
        if (json?.username == undefined) return;
        if (json?.names == undefined) return;
        if (json?.surnames == undefined) return;
        if (json?.metadata?.tags == undefined) return;
        // If the codes continues it's alright.
    
        // Call to a function who creates accounts
        accountsIntegration(json);
    }

    static create(json) {
        if (INTEGRATION_VERSION === NOT_INTEGRATED) {
            alert("Yisus no implemento el sistema para crear cuentas :(");
            return ERROR;
        }

        return new Account(json);
    }

    delete() {
        // This causes error xd: this = null;
    }

    getNames() {
        return this.json.names;
    }

    getSurnames() {
        return this.json.names;
    }

    getMetadata() {
        return this.json.metadata;
    }

}