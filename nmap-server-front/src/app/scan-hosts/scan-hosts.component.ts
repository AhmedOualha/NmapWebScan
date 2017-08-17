import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

import * as $ from 'jquery'

@Component({
  selector: 'app-scan-hosts',
  templateUrl: './scan-hosts.component.html',
  styleUrls: ['./scan-hosts.component.css']
})
export class ScanHostsComponent implements OnInit {

  hosts;
  scanStatus;
  scanned = false;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
  }

  doSN(){
    console.log('Button Clicked!');
    window.document.title = 'Scanning';
    this.appService.callSN().subscribe( ( data ) => { 
      console.log('dashboard.comp : ', data); 
      this.assignDataToLocalVariables(data);
    },
    (err) => {
      window.document.title = 'Oups..';
    } );
  }

  doPU(){
    console.log('Button Clicked!');
    window.document.title = 'Scanning';
    this.appService.callPU().subscribe( ( data ) => { 
      console.log('dashboard.comp : ', data); 
      this.assignDataToLocalVariables(data);
    },
    (err) => {
      window.document.title = 'Oups..';
    } );
  }

  doNB(){
    console.log('Button Clicked!');
    window.document.title = 'Scanning';
    this.appService.callNB().subscribe( ( data ) => { 
      console.log('dashboard.comp : ', data); 
      this.assignDataToLocalVariables(data);
    },
    (err) => {
      window.document.title = 'Oups..';
      this.scanStatus = err.scanResult;
    } );
  }

  assignDataToLocalVariables(data){
    window.document.title = 'Done!';
    this.hosts = data.hosts;
    this.scanStatus = data.scanResult;
    this.scanned = true;
  }

}
