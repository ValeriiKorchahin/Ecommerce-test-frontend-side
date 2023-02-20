import {Component, OnInit} from '@angular/core';
import {ItemService} from "../../services/item/Item.service";
import {IItem} from "../../models/IItem";
import {IPaginatedItems} from "../../models/IPaginatedItems";
import {PageEvent} from "@angular/material/paginator";


@Component({
  selector: 'app-main-page',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  // Data output
  items: IPaginatedItems;

  //Pagination data
  totalItems = 20;
  page = 1;

  constructor(private itemService:ItemService) {
  }

  ngOnInit(): void {
    //Provides initial data
    this.getItems();
  }

  //Fetch results
  getItems() {
    this.itemService.getAll(this.page).subscribe( items => {
      this.items = items;
    });
  }


  //Invoked when a category is selected. Changes data output
  findItemsByCategory($event: number) {
    this.itemService.getItemsByCategory($event).subscribe( items => {
      this.items = items;
      //Refreshes pagination controls
      this.totalItems = this.items.data.length;
      this.page = 1;
    });
  }

  //Pagination controls
  renderPage($event: number) {
    this.page = $event;
    this.getItems();
  }
}
