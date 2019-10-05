import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  mobile: string;
  resolution;
  constructor() { }

  ngOnInit() {
    this.resolution = window.innerWidth;
    this.showmobile();
    console.log(this.resolution);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.resolution = window.innerWidth;
  }
  showmobile() {
    if (this.resolution <= 599) {
      this.mobile = 'mobile-menu';
    } else {
      this.mobile = '';
    }
  }
}
