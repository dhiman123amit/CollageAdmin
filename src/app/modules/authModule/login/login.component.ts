import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  // reloadComponent() {
  //   // let currentUrl = this.router.url;
  //       // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  //       // console.log('router.routeReuseStrategy',this.router.routeReuseStrategy.shouldReuseRoute)
  //       // this.router.onSameUrlNavigation = 'reload';
  //       this.router.navigate(['faculty']);
  //       console.log('dhshdjs',this.router.url)
  //   }
  okk() {
    console.log('router---',this.router.navigate(['/faculty/list']))
  }
}
