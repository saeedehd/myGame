import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntranceComponent } from './entrance/entrance.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
	{ path: '', redirectTo: '/entrance', pathMatch: 'full' },
	{ path: 'entrance', component: EntranceComponent },
	{ path: 'home', component: HomeComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
