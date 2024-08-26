import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

export const selectorGlocery = (state: { groceries: Grocery[] }) =>
  state.groceries;

// export const selectorGrocery = createFeatureSelector<Grocery[]>('groceries');

export const selectorGroceryType = (value: string) =>
  createSelector(selectorGlocery, (state: Grocery[]) =>
    state.filter((item) => item.type === value)
  );
