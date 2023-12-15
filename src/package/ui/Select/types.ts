import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type SetStateType<T> = (value: T | ((prev: T) => T)) => void;
export type StateType<T> = [T, SetStateType<T>];

export type SelectValueType = string | number | string[] | number[] | null;

export interface FieldProps extends HTMLDivAttribute {
  setOpen?: SetStateType<boolean>;
  placeholder?: string;
}
export interface BoxProps extends HTMLDivAttribute {
  setOpen?: SetStateType<boolean>;
}
export interface ItemProps extends HTMLDivAttribute {
  value?: SelectValueType;
  setValue?: SetStateType<SelectValueType>;
}

export interface FormProps extends Omit<HTMLDivAttribute, 'children'> {
  children?: (
    setOpen: SetStateType<boolean>,
    valueState: StateType<SelectValueType>,
  ) => ReactNode;
}

// export interface SelectFormProps extends Omit<HTMLDivAttribute, 'onChange'> {
//   select?: 'single' | 'multi';
//   value?: SelectValueType;
//   placeholder?: string;
//   onChange?: (value: SelectValueType) => void;
// }
//
// export interface SelectBoxProps extends HTMLDivAttribute {}
//
// export interface SelectItemProps extends HTMLDivAttribute {
//   value?: string | number;
// }

// type SetStateType<T> = (value: T | ((prev: T) => T)) => void;
// type StateType<T> = [T, SetStateType<T>];

// export type ValueContextType = StateType<SelectValueType>;
