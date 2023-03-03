import { TestBed } from '@angular/core/testing';

import { ItemService } from './Item.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {IPaginatedItems} from "../../models/IPaginatedItems";

const pageNumber = 1;
const categoryId = 1;
const itemBuyCategoryUrl = `https://localhost:7291/api/ItemByCategory/${categoryId}?currentPageNumber=1&pageSize=6`
const itemUrl = `https://localhost:7291/api/Item?currentPageNumber=${pageNumber}&pageSize=6`

describe('ItemService', () => {

  let service: ItemService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ItemService]
    });
    service = TestBed.inject(ItemService);
    controller = TestBed.inject(HttpTestingController);
  });

  let items: IPaginatedItems | undefined;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('returns first page results', () => {
    service.getAll(pageNumber).subscribe( value => {
      items = value;
    })

    const request = controller.expectOne(itemUrl);
    request.flush({items: {item: items}});
    controller.verify();

    expect(items).toEqual(items)
  });

  it('returns items ordered by category', ()=> {
    service.getItemsByCategory(categoryId).subscribe(value => {
      items = value;
    })

    const request = controller.expectOne(itemBuyCategoryUrl);
    request.flush({items: {item: items}});
    controller.verify();

    expect(items).toEqual(items)
  })
});
