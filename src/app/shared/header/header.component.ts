import { Component, OnInit } from '@angular/core';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Constructor receives a specific Context Service with all available props
  // can be used in the HTML component (Header in this case)
  
  constructor(public serviceInfo: InfoPageService) {
    //console.log(serviceInfo)
   }

  ngOnInit(): void {
  }

}
