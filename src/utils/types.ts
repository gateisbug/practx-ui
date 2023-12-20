import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
  TextareaHTMLAttributes,
} from 'react';

export type HTMLButtonAttrbute = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
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
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type HTMLTextAreaAttibute = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

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
