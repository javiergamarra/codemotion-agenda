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
        this.route.params.subscribe(id => this.slot = this.talksService.searchById(id));
    }

    favorite(slot) {
        slot.favorite = !slot.favorite;
    }

    icon(slot) {
        return slot.favorite == null ? 'ic_menu_star' : 'ic_menu_search';
    }

    goBack() {
        this.routerExtensions.back();
    }

    goToAuthor(author) {
        this.routerExtensions.navigate(['avatar', author.avatar]);
    }
}
