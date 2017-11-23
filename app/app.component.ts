import { Component, OnInit } from '@angular/core';
import { TalksService } from './talks/talks.service';

@Component({
	selector: 'my-app',
	templateUrl: "./talks/talks.component.html"
})
export class AppComponent implements OnInit {

    private days$: any;

    constructor(private talksService: TalksService) {

    }

    keys(map) {
        return Array.from(map.keys());
    }

    ngOnInit(): void {
        this.days$ = this.talksService.getAllTalks();
    }

}

// (selectedIndexChange)="onIndexChanged($event)"
