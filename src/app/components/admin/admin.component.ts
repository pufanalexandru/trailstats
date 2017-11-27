import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { ServerRequests } from "../../services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private items: MenuItem[];
  private newCountries: any;
  private noCodeCountries: number = 0;
  private tempValue: string = '';

  constructor(private server: ServerRequests) {}

  ngOnInit() {
    this.items = [{ label: 'Site', routerLink: '/main' }];

    this.server.get("getCountries").subscribe(
      res => {
        this.newCountries = res;
        this.countNoCodeCountries(this.newCountries);
      }
    );

  }

  countNoCodeCountries(countries: any[]) {
    countries.forEach(country => {
      country.alpha_3 || this.noCodeCountries++;
    });
  }

  addCode(event: any) {
    if (event.alpha_3.length != 3) {
      event.alpha_3 = this.tempValue;
      alert("the code must have 3 letters");
      return;
    }

    this.server.getWithParams("updateCode", [{name: 'country', value: event.id}, {name: 'code', value: event.alpha_3}]).subscribe(
      res => res == 'ok' && this.noCodeCountries--
    );
  }

  getGeoStats() {
    this.server.get('getGeoData').subscribe(res => alert("Got geodata"));
  }
  
}
