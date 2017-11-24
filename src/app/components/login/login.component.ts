import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { ServerRequests } from "../../services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private badLogin: boolean = false;

  constructor(private router: Router, private server: ServerRequests) { }

  private login(username: string, password: string) {
    this.server.login({username: username, password: password}).subscribe(
      res => {
        if (res) {
          localStorage['token'] = res;
          this.router.navigate(['/admin']);
        } else {
          this.badLogin = true;
        }
      }
    );
  }

}
