import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { NativeScriptHttpModule } from 'nativescript-angular';
import { TalksService } from './talks/talks.service';
import { AppRoutingModule } from './app.routing';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';

@NgModule({
    declarations: [AppComponent, TalksComponent, TalkComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptHttpModule, AppRoutingModule],
    providers: [TalksService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
