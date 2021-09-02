import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPage, InfoTeamWork } from '../interfaces/info-page.interface';
// This services allows to read data from json file (as Http Request)
@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  loaded = false;
  team: any = [];
  constructor(private http: HttpClient) {
    // console.log("Service ready!")
    this.loadInfo()
    this.loadTeam()

  }
  private loadInfo() {
    // Make request GET to reading json file
    this.http.get("assets/data/data-page.json")
      .subscribe((response: InfoPage) => {
        this.loaded = true;
        this.info = response
        // console.log('getting json file: ', response)
      })
  }

  private loadTeam() {
    // GET firebase Info (team)
    this.http.get("https://roles-book-default-rtdb.firebaseio.com/.json")
      .subscribe((response: InfoTeamWork) => {
        this.loaded = true;
        this.team = response
        // console.log('getting teamwork response: ', response)
      })
  }
}
