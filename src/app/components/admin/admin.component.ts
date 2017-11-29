import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { ServerRequests, UtilitiesService } from "../../services";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private items: MenuItem[];
  private countries: any;
  private noCodeCountries: number = 0;
  private tempValue: string = '';

  constructor(private server: ServerRequests, private utils: UtilitiesService) {}

  ngOnInit() {
    this.items = [{ label: 'Site', routerLink: '/main' }];

    this.server.get("getCountries").subscribe(
      res => {
        this.countries = this.utils.parseFields(res, ['id', 'surface', 'population']);
        this.countNoCodeCountries(this.countries);
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
    this.server.get('getGeoData').subscribe(res => this.countries = this.utils.parseFields(res, ['id', 'surface', 'population']);
  }

  getTrails() {
    this.server.get('getTrails').subscribe(res => alert("got them"));
  }
  
}
