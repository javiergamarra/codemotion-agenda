import { Component, OnInit } from '@angular/core';
import { TalksService } from './talks/talks.service';

@Component({
    selector: 'my-app',
    template: `

		<ActionBar title="My App" class="action-bar"></ActionBar>

		<ng-container *ngIf="days$ | async; let days">
			<TabView selectedIndex="0" sdkExampleTitle sdkToggleNavButton>
				<ng-container *ngFor="let day of days">
					<StackLayout *tabItem="{title: day.name}">
						<ScrollView>
							<StackLayout>
								<StackLayout *ngFor="let hour of keys(day.hours)">
									<Label text="{{hour}}" class="m-15"></Label>
									<Label text="{{slot.contents.title}}" *ngFor="let slot of day.hours.get(hour)"
									       class="m-25"></Label>
								</StackLayout>
							</StackLayout>
						</ScrollView>
					</StackLayout>
				</ng-container>
			</TabView>
		</ng-container>
    `
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
