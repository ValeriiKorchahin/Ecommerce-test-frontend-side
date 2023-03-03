import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {ICategory} from "../../models/ICategory";

const url = 'https://localhost:7291/api/Category';

describe('CategoryService', () => {

  let service: CategoryService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CategoryService]
    });
    service = TestBed.inject(CategoryService);
    controller = TestBed.inject(HttpTestingController)
  });

  let categories: ICategory[] | undefined;
  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('returns categories', () => {
    service.getAll().subscribe(category => {
      categories = category;
    })

    const request = controller.expectOne(url);
    request.flush({categories: {category: categories}})
    controller.verify();

    expect(categories).toEqual(categories);
  })
});
