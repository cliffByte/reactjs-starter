import { type IPagination } from '@type/pagination.types'

export interface IResponse<T> {
  data: T
  pagination: IPagination
}
