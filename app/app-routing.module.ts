import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

// import {HomeComponent} from './home/home.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'auth', loadChildren: 'app/auth/auth.module#AuthModule'},
    {path: 'heroes', loadChildren: 'app/home/home.module#HomeModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}