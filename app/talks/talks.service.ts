import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TalksService {

    constructor(private http: Http) {

    }

    getAllTalks() {
        return this.http.get('https://www.koliseo.com/codemotion/codemotion-madrid/r4p/5632002325741568/agenda')
            .map(x => x.json());
    }
}
