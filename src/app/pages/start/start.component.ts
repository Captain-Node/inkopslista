import { Component, OnInit } from '@angular/core';
import { RoutePaths } from 'src/app/shared/route-paths.enum';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  RoutePaths = RoutePaths;
  constructor() { }

  ngOnInit(): void {
  }

}
