import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ICategory} from "../../models/ICategory";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  //Unfortunately, environments.ts file doesn't seem to work, so I had to wrote API strings.

  getAll(): Observable<ICategory[]>{
    return this.httpClient.get<ICategory[]>('https://localhost:7291/api/Category');
  }

}
