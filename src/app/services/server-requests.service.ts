import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerRequests {

  private server: string = "http://localhost:8080/trailstats/Main?ajaxReq=true&"

  constructor(private http: Http) {}

  public checkToken(token: string): Observable<any> {
    return this.http.get(this.server + "checkToken=true&token=" + token).map(res => res.json().data)
  }

  public login(credentials: any): Observable<any> {
    return this.http.post(this.server + "login=true", JSON.stringify(credentials)).map(res => res.json().data)
  }

}