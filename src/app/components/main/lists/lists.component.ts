import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

import { ServerRequests, UtilitiesService } from "../../../services";
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  private countries: any[];
  private items = [
    { label: 'Total', command: () => this.currentList = 'total' },
    { label: 'Area', command: () => this.currentList = 'area' },
    { label: 'Population', command: () => this.currentList = 'population' }
  ];
  private currentList: string = 'total';

  constructor(private server: ServerRequests, private utils: UtilitiesService) {}

  ngOnInit() {
    this.server.get("getData").subscribe(res => {
      this.countries = this.utils.parseFields(res, ['id', 'total_pos', 'surface_pos', 'population_pos', 'total_trails', 'surface', 'population']);
      console.log(this.countries);
    });
  }

  getPosClass(country: any, type: string): string {
    if (parseInt(country.yesterday[type + '_pos']) == country[type + '_pos']) {
      return 'fa fa-minus';
    } else if (parseInt(country.yesterday[type + '_pos']) > country[type + '_pos']) {
      return 'fa fa-caret-up green';
    } else {
      return 'fa fa-caret-down red';
    }
  }

  getTooltipText(country: any) {
    let yesterdayTrails = parseInt(country.yesterday.total_trails);
    let todayTrails = country.total_trails;
    let difference = todayTrails - yesterdayTrails;

    if (difference == 0) {
      return 'no new trails';
    } else if (difference == 1) {
      return '1 new trail';
    } else if (difference > 1) {
      return difference + ' new trails';
    } else if (difference < 0) {
      return Math.abs(difference) + ' deleted trails';
    }

  }

}
