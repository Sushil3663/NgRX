import { createReducer, on } from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';
import { groceryAction } from '../actions/Grocery.action';

// const initialState: Grocery[] = [
//   { id: 1, name: 'Milk', type: 'fruits' },
//   { id: 2, name: 'Banana', type: 'fruits' },
//   { id: 3, name: 'chicken', type: 'snacks' },
//   { id: 4, name: 'chip', type: 'snacks' },
// ];
const initialState: Grocery[] = [];

export const groceryReducer = createReducer(
  initialState,
  on(groceryAction.loadGroceriesSuccess, (state: Grocery[], action: any) => {
    return action.payload;
  }),
  on(groceryAction.loadGroceryError, (state: Grocery[], action: any) => {
    return [];
  })
);
