import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export type HTMLButtonAttrbute = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type HTMLSpanAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLSpanElement
>;

export type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type HTMLLabelAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLLabelElement>,
  HTMLLabelElement
>;

export type HTMLInputAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  readOnly?: boolean;
};

export type HTMLTextAreaAttibute = DetailedHTMLProps<
  HTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
> & {
  readOnly?: boolean;
};

export type HTMLTableAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

export type HTMLTableSectionAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

export type HTMLTableRowAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

export type HTMLTableCellAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
>;

export type SetStateType<T> = (value: T | ((prev: T) => T)) => void;

export type StateType<T> = [T, SetStateType<T>];

export type ChildrenType = ReactNode;
