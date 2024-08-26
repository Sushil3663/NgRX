import { createReducer, on } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';
import { addToBucket, removeFromBucket } from '../actions/Bucket.action';

const initialState: Bucket[] = [];

export const bucketReducer = createReducer(
  initialState,
  on(addToBucket, (state, action) => {
    const stateData: number = action.payload?.id;
    let bucketData = state?.find((item) => item?.id === stateData);
    if (bucketData) {
      return state.map((item) =>
        item.id === stateData ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...state, action.payload];
    }
  }),
  on(removeFromBucket, (state, action) => {
    const stateData: number = action.payload?.id;
    let bucketData = state?.find((item) => item?.id === stateData);
    if (bucketData) {
      return state
        .map((item) =>
          item.id === stateData
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);
    } else {
      return state;
    }
  })
);
