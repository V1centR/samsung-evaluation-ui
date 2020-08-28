import { Component, OnInit } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) {
  }

  emailLogin: string;
  password: string;
  username: string;

  ngOnInit(): void {
  }

  login(){
  
    console.log("Login:: " + this.emailLogin);
    console.log("Form Submited:: OK");

    this.route.navigate(['home']);
    return false;
  }

}
