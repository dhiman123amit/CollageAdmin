import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sigh-up',
  templateUrl: './sigh-up.component.html',
  styleUrls: ['./sigh-up.component.scss']
})
export class SighUpComponent implements OnInit {
  password: any;
  // password: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  showPassword() {
		this.password = !this.password;
	}

}
