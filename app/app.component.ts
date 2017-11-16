import { Component, OnInit } from '@angular/core';
import { TalksService } from './talks/talks.service';

@Component({
    selector: 'my-app',
    template: `
		<ActionBar title="My App" class="action-bar"></ActionBar>

		<StackLayout orientation="vertical" *ngFor="let day of talks$ | async">

			<Label text='{{day.name}}'></Label>

			<StackLayout *ngFor="let track of day.tracks">
				<Label text='{{track.name}}'></Label>
				<StackLayout *ngFor="let slot of track?.slots">
					<Label text='{{slot.contents.title}}'></Label>
				</StackLayout>
			</StackLayout>
		</StackLayout>
    `
})
export class AppComponent implements OnInit {
    private talks$: any;

    constructor(private talksService: TalksService) {

    }

    ngOnInit(): void {
        this.talks$ = this.talksService.getAllTalks().map(x => x['days']);
    }

}
