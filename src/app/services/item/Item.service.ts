import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPaginatedItems} from "../../models/IPaginatedItems";

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient:HttpClient) { }

  //Unfortunately, environments.ts file doesn't seem to work, so I had to wrote API strings.

  getAll(pageNumber: number): Observable<IPaginatedItems> {
    return this.httpClient.get<IPaginatedItems>('https://localhost:7291/api/' + 'Item' + '?currentPageNumber=' + pageNumber + '&pageSize=' + 6);
  }

  getItemsByCategory(id: number): Observable<IPaginatedItems> {
    return this.httpClient.get<IPaginatedItems>('https://localhost:7291/api/ItemByCategory/' + id + '?currentPageNumber=' + 1 + '&pageSize=' + 6);
  }
}
