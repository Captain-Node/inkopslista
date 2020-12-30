import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutePaths } from '../route-paths.enum';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  RoutePaths = RoutePaths;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogout(){
    console.log('Loggar ut')
    this.router.navigateByUrl(RoutePaths.START_URL)
  }
}
