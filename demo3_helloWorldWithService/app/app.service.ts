import {Injectable} from "angular2/core";

@Injectable()
export class AppService {

    private nameArr = ['Bibby', 'Chung'];

    public getFullName() {

        return this.nameArr.join(' ');

    }
    
}