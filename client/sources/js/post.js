class Post {

    constructor(json) {
        this.json = json;

        // Some tests
        if (json?.title == undefined) return;
        if (json?.description == undefined) return;
        if (json?.metadata == undefined) return;
        if (json?.metadata?.user == undefined) return;
        if (json?.metadata?.tags == undefined) return;
        
        // If the codes continues it's alright.
    
        // Call to a function who posts
        postIntegration(json);
    }

    static create(json) {
        if (INTEGRATION_VERSION === NOT_INTEGRATED || json == null) {
            alert("Yisus no implemento el sistema para publicar posts :(");
            return NOT_INTEGRATED;
        }

        return new Post(json);
    }

    post() {
        integrationPost(this.json);
    }

    delete() {
        // Little easter egg
        alert("Not implemented\nYou shouldn't see this message.\nSo strange (O.O)");
    }

    getMetadata() {
        return this.json.metadata;
    }

    getTitle() {
        return this.json.title;
    }

    getDescription() {
        return this.json.description;
    }

}