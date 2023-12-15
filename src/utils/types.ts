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

export type HTMLInputAttribute = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type HTMLTextAreaAttibute = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

export type SetStateType<T> = (value: T | ((prev: T) => T)) => void;

export type StateType<T> = [T, SetStateType<T>];

export type ChildrenType = ReactNode;
