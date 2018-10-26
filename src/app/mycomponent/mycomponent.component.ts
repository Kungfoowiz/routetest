import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {

  result : string;

  constructor(
    private http: HttpClient
  ) {}

  ngOnInit() {
    // this.result = this.getTest();
    // this.hashService.getHashes().subscribe(hashes => this.hashes = hashes.slice(1, 5));
    this.getTest().subscribe(result => this.result = result);
  }

  getTest(): Observable<string> {

    // return this.http.get<string>("https://localhost:5001/api/values");
    return this.http.get<string>("http://localhost:5000/api/values");
  }

}
