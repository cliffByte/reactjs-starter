export interface ISimpleTable {
  title: string
  description: string
  type?: 'image' | 'text' | 'status'
  status?: 'success' | 'error' | 'warning'
}

export enum Status {
  NEW = 'NEW',
  ON_PROGRESS = 'ON_PROGRESS',
  COMPLETED = 'COMPLETED',
  APPROVED = 'APPROVED',
  DRAFT = 'DRAFT',
  REJECT = 'REJECT',
}

export interface IAdress {
  province: string
  district: string
  municipality: string
  ward: string
}

export interface IChart {
  en: string
  ne: string
  value: string
  data: number
}
