import {Component} from 'angular2/core';
import {AppService} from "./app.service";

@Component({
    selector: 'my-app',
    providers: [AppService],
    template: `
    <h1>My First Angular 2 -- With Service</h1>
    <hr />
    <h3>Full name is {{name}}</h3>
    `
})
export class AppComponent {

    public name;

    constructor(ser: AppService) {
        this.name = ser.getFullName();
    }

}