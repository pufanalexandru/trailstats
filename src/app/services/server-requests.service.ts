import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerRequests {

  private server: string = "http://localhost:8080/trailstats/Main?ajaxReq=true&"

  constructor(private http: Http) {}

  public login(credentials: any): Observable<any> {
    return this.http.post(this.server + "login=true", JSON.stringify(credentials)).map(res => res.json().data)
  }

  public get(operation: string): Observable<any> {
    return this.http.get(this.server + operation + "=true&token=" + localStorage['token']).map(res => res.json().data);
  }

  public getWithParams(operation: string, params: any[]): Observable<any> {
    let paramsString: string = '';
    params.forEach(param => paramsString += param.name + "=" + param.value + "&");
    return this.http.get(this.server + operation + "=true&" + paramsString + "token=" + localStorage['token']).map(res => res.json().data);
  }

}