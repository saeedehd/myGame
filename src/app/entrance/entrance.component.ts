import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
	selector: 'app-entrance',
	templateUrl: './entrance.component.html',
	styleUrls: [ './entrance.component.scss' ]
})
export class EntranceComponent {
	username = new FormControl('', [ Validators.required ]);
	constructor(private router: Router) {
		this.username = new FormControl();
	}
	submit() {
		this.router.navigate([ '/home' ]);
	}
}
