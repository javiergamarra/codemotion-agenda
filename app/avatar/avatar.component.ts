import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular';
import 'rxjs/add/operator/switchMap';
import app = require('application');

declare var com: any;
declare var android: any;

@Component({
    selector: 'agenda-avatar',
    templateUrl: './avatar/avatar.component.html'
})
export class AvatarComponent implements OnInit {

    constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {

        this.route.params.subscribe(id => {

            let activity = app.android.foregroundActivity;

            let contentId = app.android.context.getResources().getIdentifier('content', 'id', 'android');
            let container = activity.findViewById(contentId);
            let imageView = new android.widget.ImageView(app.android.context);
            container.addView(imageView);
            com.squareup.picasso.Picasso.with(app.android.foregroundActivity).load(id.id).into(imageView);
        });

        if (app.android) {
            app.android.on(app.AndroidApplication.activityBackPressedEvent, this.backEvent);
        }

    }

    backEvent(args) {
        let activity = app.android.foregroundActivity;
        let contentId = app.android.context.getResources().getIdentifier('content', 'id', 'android');
        let container = activity.findViewById(contentId);
        container.removeViewAt(container.getChildCount()-1)
    }

    goBack() {
        this.backEvent(null);
        this.routerExtensions.back();
    }

}
