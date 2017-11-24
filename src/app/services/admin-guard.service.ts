import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";

import { ServerRequests } from "./";

@Injectable()
export class AdminGuardService implements CanActivate {

  constructor(private router: Router, private server: ServerRequests) {}

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      if (!localStorage['token']) {
        this.router.navigate(['/login']);
        resolve(false);
      }
      this.server.checkToken(localStorage['token']).subscribe(res => { 
        res == false && this.router.navigate(['/login']);
        resolve(res) 
      });
    });
  }

}
