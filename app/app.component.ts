import { Component, OnInit } from '@angular/core';
import { TalksService } from './talks/talks.service';

@Component({
    selector: 'my-app',
    template: `

		<ActionBar title="My App" class="action-bar"></ActionBar>


		<Label text="{{days | json}}"></Label>

		<ng-container *ngIf="days && days">
			<TabView selectedIndex="0"
			         sdkExampleTitle sdkToggleNavButton>
				<!--<ng-container *ngFor="let day of talks$ | async">-->

				<Label text="{{days | json}}"></Label>
                
				<StackLayout *tabItem="{title: days[0].name}">
					<ScrollView>
						<StackLayout>
							<Label text="{{days[0].name}}" textWrap="true" class="m-15"></Label>
							<ng-container *ngFor="let track of days[0].tracks">
								<Label text="{{track.name}}" textWrap="true" class="m-15"></Label>
								<ng-container *ngFor="let slot of track?.slots">
									<Label text='{{slot.contents.title}}'></Label>
								</ng-container>
							</ng-container>
						</StackLayout>
					</ScrollView>
				</StackLayout>
				<StackLayout *tabItem="{title: days[1].name}">
					<ScrollView>
						<StackLayout>
							<Label text="{{days[1].name}}" textWrap="true" class="m-15"></Label>
							<ng-container *ngFor="let track of days[1].tracks">
								<Label text="{{track.name}}" textWrap="true" class="m-15"></Label>
								<ng-container *ngFor="let slot of track?.slots">
									<Label text='{{slot.contents.title}}'></Label>
								</ng-container>
							</ng-container>
						</StackLayout>
					</ScrollView>
				</StackLayout>
				<!--</ng-container>-->
			</TabView>
		</ng-container>
    `
})
export class AppComponent implements OnInit {

    private days: any;

    constructor(private talksService: TalksService) {

    }

    ngOnInit(): void {
        this.talksService.getAllTalks().map(x => x['days']).subscribe(days => this.days = days);
    }

}

//

// (selectedIndexChange)="onIndexChanged($event)"
