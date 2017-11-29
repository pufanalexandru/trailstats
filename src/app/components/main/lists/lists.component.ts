import { Component, OnInit } from '@angular/core';

import { ServerRequests, UtilitiesService } from "../../../services";
import { ViewEncapsulation } from '@angular/core/src/metadata/view';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  private countries: any[];

  constructor(private server: ServerRequests, private utils: UtilitiesService) {}

  ngOnInit() {
    this.server.get("getData").subscribe(res => {
      this.countries = this.utils.parseFields(res, ['id', 'surface_pos', 'population_pos', 'total_trails', 'surface', 'population']);
      console.log(this.countries);
    });
  }

}
