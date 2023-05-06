export interface PaginationResult<T> {
  page: number;
  totalPages: number;
  pageSize: number;
  itemsCount: number;
  isLastPage: boolean;
  data: T[];
}
