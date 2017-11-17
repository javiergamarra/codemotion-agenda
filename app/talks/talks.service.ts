import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TalksService {

    constructor(private http: Http) {

    }

    getAllTalks() {
        return this.http.get('https://www.koliseo.com/codemotion/codemotion-madrid/r4p/5632002325741568/agenda')
            .map(x => x.json())
            .map(x => x['days'])
            .map(days => {

                for (let day of days) {
                    let hours = new Map();

                    for (let track of day.tracks) {
                        for (let slot of track.slots) {
                            if (slot.contents.title) {
                                let value = hours.has(slot.start) ? hours.get(slot.start) : [];
                                value.push(slot);
                                hours.set(slot.start, value);
                            }
                        }
                    }
                    day.hours = hours;
                }
                return days;
            });
    }
}
