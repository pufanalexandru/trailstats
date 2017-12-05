import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-trail-tables',
  templateUrl: './trail-tables.component.html',
  styleUrls: ['./trail-tables.component.css']
})
export class TrailTablesComponent implements OnInit, OnChanges {

  @Input() countries: any[];
  @Input() type: string;
  @Input() sortField: string;
  @Input() header: string;

  private filteredCountries: any[];
  private showLessCountries: boolean;
  private sortOrder: number;

  constructor() { }

  ngOnInit() {
    this.showLessCountries = this.type == 'total' ? false : true;
    this.sortOrder = this.sortField == 'total' ? -1 : 1;
  }

  ngOnChanges(changes) {
    this.countries.length && this.toggleCountriesMode(this.showLessCountries);
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

  toggleCountriesMode(showLess: boolean) {
    this.filteredCountries = showLess ? this.countries.filter(country => country.total_trails >= 50) : this.countries;
  }

}
