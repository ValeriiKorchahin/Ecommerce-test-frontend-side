import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CategoryService} from "../../services/category/category.service";
import {ICategory} from "../../models/ICategory";
import {coerceNumberProperty} from "@angular/cdk/coercion";


@Component({
  selector: 'app-search-options',
  templateUrl: './search-options.component.html',
  styleUrls: ['./search-options.component.scss']
})
export class SearchOptionsComponent implements OnInit {

  @Output() categorySelect = new EventEmitter<number>();

  categories: ICategory[];

  constructor(private categoryService:CategoryService) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

   selectCategory(id: number){
    this.categorySelect.emit(id);
  }
}
