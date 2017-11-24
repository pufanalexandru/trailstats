import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { ServerRequests } from "../../services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private items: MenuItem[];

  constructor(private server: ServerRequests) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Site',
        routerLink: '/main'
      }
    ];
  }

  getGeoStats() {
    this.server.getGeoData().subscribe(
      res => {
        console.log(res);
      }
    )
  }

}
