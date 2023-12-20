import {
  HTMLTableAttribute,
  HTMLTableCellAttribute,
  HTMLTableRowAttribute,
  HTMLTableSectionAttribute,
} from '@util/types';

export interface TableContainerProps extends HTMLTableAttribute {}
export interface THeadProps extends HTMLTableSectionAttribute {}
export interface TBodyProps extends HTMLTableSectionAttribute {}
export interface TableRowProps extends HTMLTableRowAttribute {}
export interface TableCellProps extends HTMLTableCellAttribute {
  head?: boolean;
}
