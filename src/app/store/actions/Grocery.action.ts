import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from '@ngrx/store';
import { Grocery } from '../../../models/grocery.model';

// export const initGrocery = createAction('[Grocery] initGrocery');

// export const groceryAction = createAction('[Grocery] Load Grocery');

export const groceryAction = createActionGroup({
  source: 'Grocery API',
  events: {
    'load groceries': emptyProps,
    'load groceries success': props<{ payload: Grocery[] }>(),
    'load grocery error': emptyProps,
  },
});
