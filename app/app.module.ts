import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppComponent } from './app.component';
import { NativeScriptHttpModule } from 'nativescript-angular';
import { TalksService } from './talks/talks.service';

@NgModule({
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptHttpModule],
    providers: [TalksService],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {
}
