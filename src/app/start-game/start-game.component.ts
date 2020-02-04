import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
	selector: 'app-start-game',
	templateUrl: './start-game.component.html',
	styleUrls: [ './start-game.component.scss' ]
})
export class StartGameComponent implements OnInit {
	constructor(public dialogRef: MatDialogRef<StartGameComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

	onNoClick(): void {
		this.dialogRef.close();
	}

	ngOnInit() {}
}
