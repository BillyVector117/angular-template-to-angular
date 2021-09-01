import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage } from '../interfaces/info-page.interface';
// This services allows to read data from json file (as Http Request)
@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;
  constructor(private http: HttpClient) {
    // console.log("Service ready!")
    // Make request GET to reading json file

    this.http.get("assets/data/data-page.json")
      .subscribe((response: InfoPage) => {
        this.loaded = true;
        this.info = response
        console.log('json file: ', response)
      })

  }
}
