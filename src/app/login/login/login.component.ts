import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  signInLoading = false;

  constructor(
    private router: Router,
  ) {
  }
  ngOnInit() {
  }

  signIn(){
    this.signInLoading = true;
    setTimeout (()=>{                   //Arrow function permet de binder this
      this.router.navigate(['/foo']);
    }, 1000);
  }
}
