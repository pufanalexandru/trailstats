import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent, LoginComponent, AdminComponent } from "./components";
import { AdminGuardService } from "./services";

const appRoutes: Routes = [
	{ path: 'admin', component: AdminComponent, canActivate: [ AdminGuardService ] },
	{ path: 'login', component: LoginComponent },
	{ path: '', component: MainComponent },
	{ path: '**', component: MainComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule{}