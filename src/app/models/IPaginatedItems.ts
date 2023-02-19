import {IItem} from "./IItem";

export interface IPaginatedItems {
  totalCount: number,
  currentPageNumber: number,
  pageSize: number,
  totalPages: number,
  hasNextPage: boolean,
  hasPreviousPage: boolean,
  data: [IItem]

}
