import { createAction, props } from '@ngrx/store';
import { Bucket } from '../../../models/bucket.model';
interface BucketRemove {
  id: number;
  name: string;
}
export const addToBucket = createAction(
  '[addToBucket] Add to bucket',
  props<{ payload: Bucket }>()
);

export const removeFromBucket = createAction(
  '[removeFromBucket] Remove from bucket',
  props<{ payload: BucketRemove }>()
);
