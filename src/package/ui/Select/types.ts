import {
  HTMLDivAttribute,
  SetStateType,
  StateType,
  ChildrenType,
} from '@util/types';

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
  ) => ChildrenType;
}
