import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-sigh-up',
  templateUrl: './sigh-up.component.html',
  styleUrls: ['./sigh-up.component.scss']
})
export class SighUpComponent implements OnInit {
  password: any;
  navUrl: any;
  // password: boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }

  showPassword() {
		this.password = !this.password;
	}

}
