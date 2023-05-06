export interface PaginationResult<T> {
  page: number;
  totalPages: number;
  pageSize: number;
  itemsCount: number;
  data: T[];
}
