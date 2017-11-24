import { Component, OnInit } from '@angular/core';
import { TalksService } from './talks.service';
import { RouterExtensions } from 'nativescript-angular';

@Component({
    selector: 'agenda-talks',
    templateUrl: './talks/talks.component.html'
})
export class TalksComponent implements OnInit {

    private days$: any;

    constructor(private talksService: TalksService, private routerExtensions: RouterExtensions) {

    }

    keys(map) {
        return Array.from(map.keys());
    }

    ngOnInit(): void {
        this.days$ = this.talksService.getAllTalks();
    }

    goToDetail(slot) {
        Object.assign(slot, slot.contents)
        this.routerExtensions.navigate(['talks', slot.id], {queryParams: slot});
    }

}

// (selectedIndexChange)="onIndexChanged($event)"
