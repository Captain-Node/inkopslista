import { Component, OnInit } from '@angular/core';
import { RoutePaths } from 'src/app/shared/enums/route-paths.enum';
import { ListItem } from 'src/app/shared/models/list.model';
import {ListService} from '../../services/list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: ListItem[] = [];
  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.list = this.listService.list;
  }

}
