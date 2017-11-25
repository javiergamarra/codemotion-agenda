import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { TalksComponent } from './talks/talks.component';
import { TalkComponent } from './talk/talk.component';
import { AvatarComponent } from './avatar/avatar.component';

const routes: Routes = [
    {path: '', redirectTo: '/talks', pathMatch: 'full'},
    {path: 'talks', component: TalksComponent},
    {path: 'talks/:id', component: TalkComponent},
    {path: 'avatar/:id', component: AvatarComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
