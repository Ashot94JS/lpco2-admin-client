import type { SyntheticEvent } from 'react';

import { type SelectBaseOption } from '@wf/components/dist/components/FormElements/Select/Select';

export interface IFilterItem<T> {
  field: string;
  placeholder: string;
  onChange?: ({ currentTarget: { value } }: { currentTarget: { value: string } }) => void;
  selectChange?: (option: SelectBaseOption, action: Record<string, T>) => void;
  datePickerChange?: ((date: Date | null, event: SyntheticEvent<unknown> | undefined) => void) & ((date: Date) => void);
  onInputChange?: (value: string) => void;
  options?: Array<SelectBaseOption>;
  value?: string;
  datePickerValue?: DatePickerType;
  selectValue?: SelectBaseOption;
  inputValue?: string;
  name: string;
}

export type DatePickerType = Date | [Date | null, Date | null] | null | undefined;

export interface ITHeaderItem {
  name: string;
  flex: number;
  icon?: string;
}

export interface ITableComponentProps extends IWithReactChildren {
  filterItems?: Array<IFilterItem<SelectBaseOption>>;
  tableHeaders?: Array<ITHeaderItem>;
  dataCount?: number;
  onPageChange?: (page: number) => void;
  emptyDataTitle?: string;
  emptyDataText?: string;
  maxRows?: number;
  inner?: boolean;
  withHeader?: boolean;
  loader?: boolean;
}

export interface IFItemProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  filterItems: Array<IFilterItem<any>>;
}

export interface ITHeaderProps {
  tableHeaders?: Array<ITHeaderItem>;
}

export enum FilterItems {
  input = 'INPUT',
  select = 'SELECT',
  datepicker = 'DATEPICKER',
}

export type OptionsItemType = {
  label: string;
  value: string;
  tag?: TagItemType;
};

export type TagItemType = {
  label: string | number;
} | null;
