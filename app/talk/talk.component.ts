import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TalksService } from '../talks/talks.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'agenda-talk',
    template: `
		<ActionBar title="Details" class="action-bar"></ActionBar>
		<FlexboxLayout flexDirection="column" class="page">
			<FlexboxLayout class="m-15">
				<Label class="h2" text="{{slot.start}}"></Label>
				<Label class="h2" text="{{slot.end}}"></Label>
				<Label class="h2" text="{{slot.title}}" textWrap="true"></Label>
				<Label class="h2" text="{{slot.type}}"></Label>

				<Button (tap)="favorite(slot)"></Button>
			</FlexboxLayout>
		</FlexboxLayout>`,
})
export class TalkComponent implements OnInit {

    slot;

    constructor(private talksService: TalksService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(slot => this.slot = slot);
    }

    favorite(slot) {
        slot.favorite = true;
    }
}
