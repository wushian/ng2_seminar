import {Component} from 'angular2/core';
import {myDiv} from './myDirectives';

@Component({
    selector: 'my-app',
    directives: [myDiv.BibbySay, myDiv.BibbyTalk, myDiv.BibbyMurmur],
    template: `
    <h1>My First Angular 2 -- Hello World</h1>
    <hr bibby-say bibby-talk bibby-murmur />
    <h3>.js Files</h3>
    `
})
export class AppComponent { }