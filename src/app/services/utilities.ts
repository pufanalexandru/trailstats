import { Injectable } from '@angular/core';

@Injectable()
export class UtilitiesService {

  public parseFields(list: any[], fields: string[]): any[] {

    list.forEach(e => {
      fields.forEach(f => {
        e[f] = parseInt(e[f]);
      });
    });

    return list;
  }

}
