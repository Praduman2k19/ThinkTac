import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ThinkTac';


  constructor(public router: Router){
    // let auth_token = localStorage.getItem('auth_token')
    // if (auth_token == null) {
    //   console.log(auth_token);
    //   this.router.navigate(['/login']);
    //   // this.service.openLoginDialog("")
    // }
  }
}
