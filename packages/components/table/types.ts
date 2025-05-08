export interface ColumnProps {
  type?: "selection" | "index" | "expand"
  label?: string
  prop?: string
  width?: string | number
  minWidth?: string | number
  fixed?: boolean | "left" | "right"
  sortable?: boolean | "custom"
  sortMethod?: (a: any, b: any) => number
  sortBy?: string | ((row: any) => string | number)
  sortOrders?: string[]
  resizable?: boolean
  formatter?: (row: any, column: ColumnProps, cellValue: any, index: number) => any
  selectable?: (row: any, index: number) => boolean
  align?: "left" | "center" | "right"
  headerAlign?: "left" | "center" | "right"
  className?: string
  labelClassName?: string
  columnClassName?: string
}

export interface TableProps {
  columns: ColumnProps[]
  data: any[]
  rowKey: string
  height?: string | number
  maxHeight?: string | number
  border?: boolean
  stripe?: boolean
  showHeader?: boolean
  showSummary?: boolean
  summaryMethod?: (data: any[]) => any[]
  tooltipEffect?: "dark" | "light"
  showIndex?: boolean
  indexMethod?: (index: number) => number
  expandRowKeys?: string[]
  defaultExpandAll?: boolean
  expandRowClassName?: string
  defaultSort?: {
    prop: string
    order: "ascending" | "descending"
  }
}
