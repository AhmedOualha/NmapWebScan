import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";


@Injectable()
export class AppService {

  constructor(private http: Http) { }

  callPU(){
    return this.http.get('http://localhost:3000/command/PU')
    .map( (response: Response) => response.json())
    .catch( (err) => Observable.throw('[i] An error occured on app.service : %s', err) );
  }
  callSN(){
    return this.http.get('http://localhost:3000/command/SN')
    .map( (response: Response) => response.json())
    .catch( (err) => Observable.throw('[i] An error occured on app.service : %s', err) );
  }

  callNB(){
    return this.http.get('http://localhost:3000/command/NB')
    .map( (response: Response) => response.json())
    .catch( (err) => Observable.throw('[i] An error occured on app.service : %s', err) );
  }

  getHosts(){
    return this.http.get('http://localhost:3000/command/hosts')
    .map((response:Response)=>{ response.json()})
    .catch((err) => Observable.throw('[i] An error occured on app.service : %s', err) )
  }
}
