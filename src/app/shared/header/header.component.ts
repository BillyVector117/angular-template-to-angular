import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPageService } from 'src/app/services/info-page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Constructor receives a specific Context Service with all available props
  // can be used in the HTML component (Header in this case)

  constructor(public serviceInfo: InfoPageService, private router: Router) {
    //console.log(serviceInfo)
  }

  ngOnInit(): void {
  }
  searchProduct(words: string) {
    if (words.length < 1) {
      return;
    }
    // Navigate to /search path adding 'words' into URL
    this.router.navigate(['/search', words])
    console.log(words)
  }
}
