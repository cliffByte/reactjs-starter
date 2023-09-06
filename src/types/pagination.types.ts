export interface IPagination {
  currentPage: number
  perPage: number
  searchTerm: string
  total: number | undefined
  totalPages: number
  refreshTable: boolean
}
