import {Component, Directive} from 'angular2/core';

export module myDiv {

    @Directive({
        selector: '[bibby-say]'
    })
    export class BibbySay {
        constructor() {
            console.log("say");
        }
    }

    @Directive({
        selector: '[bibby-talk]'
    })
    export class BibbyTalk {
        constructor() {
            console.log("talk");
        }
    }

    @Directive({
        selector: '[bibby-murmur]'
    })
    export class BibbyMurmur {
        constructor() {
            console.log("murmur");
        }
    }


}




