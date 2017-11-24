import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalksService } from '../talks/talks.service';
import { RouterExtensions } from 'nativescript-angular';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'agenda-talk',
    templateUrl: './talk/talk.component.html'
})
export class TalkComponent implements OnInit {

    slot;

    constructor(private talksService: TalksService, private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(slot => this.slot = slot);
    }

    favorite(slot) {
        slot.favorite = true;
    }

    goBack() {
        this.routerExtensions.back();        
    }
}
