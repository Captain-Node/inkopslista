import { Injectable } from '@angular/core';
import {ListItem} from '../shared/models/list.model';
import {ListItems} from '../shared/enums/list-items.enum'

@Injectable({
  providedIn: 'root'
})
export class ListService {
list: ListItem[] = [
  {id: 1, category: ListItems.DAIRY, name: 'Mjölk'},
  {id: 2, category: ListItems.DAIRY, name: 'Yoghurt'},
  {id: 3 , category: ListItems.FRUIT_AND_VEGETABLES, name: 'Gurka'},
  {id: 4, category: ListItems.FRUIT_AND_VEGETABLES, name: 'Tomater'}
]
  constructor() { }
}
