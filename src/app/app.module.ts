import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { BoardComponent } from './board/board.component';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { StartGameComponent } from './start-game/start-game.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
	MatCardModule,
	MatButtonModule,
	MatIconModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntranceComponent } from './entrance/entrance.component';
import { DurakComponent } from './durak/durak.component';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
	declarations: [
		AppComponent,
		CardComponent,
		BoardComponent,
		PlayerComponent,
		HomeComponent,
		StartGameComponent,
		EntranceComponent,
		DurakComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		MatCardModule,
		FlexLayoutModule,
		MatButtonModule,
		MatIconModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		FormsModule,
		ReactiveFormsModule,

		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [ HttpClient ]
			}
		}),

		BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [ AppComponent ],
	entryComponents: [ StartGameComponent ]
})
export class AppModule {}
