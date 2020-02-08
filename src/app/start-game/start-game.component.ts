import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
	selector: 'app-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: [ './start-game.component.scss' ]
})
export class StartGameComponent implements OnInit {
	gameId = 456;
	dialogTitle: string;

	constructor(public dialogRef: MatDialogRef<StartGameComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	ngOnInit() {
		this.dialogTitle = this.data.dialogTitle;
	}
}
