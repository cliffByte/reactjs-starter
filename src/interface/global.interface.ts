import { ReactNode } from 'react'

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

export interface IRoute {
  path: string
  element: ReactNode
  children?: IRoute[]
}

export interface ISidebar {
  minimize?: boolean
  title: string
  link: string
  icon: ReactNode
  roleLevel?: string[] | string
  subMenu?: Array<{
    title: string
    link: string
    icon: ReactNode
    roleLevel?: string[] | string
  }>
  openSubMenu?: boolean
}
