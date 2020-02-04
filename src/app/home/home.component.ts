import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StartGameComponent } from '../start-game/start-game.component';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: [ './home.component.scss' ]
})
export class HomeComponent implements OnInit {
	constructor(public dialog: MatDialog) {}

	openDialog(): void {
		const dialogRef = this.dialog.open(StartGameComponent, { data: {} });

		dialogRef.afterClosed().subscribe((result) => {
			console.log('The dialog was closed');
		});
	}

	ngOnInit() {}
}
