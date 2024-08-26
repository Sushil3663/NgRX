import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  addToBucket,
  removeFromBucket,
} from '../../store/actions/Bucket.action';
import {
  selectorGlocery,
  selectorGroceryType,
} from '../../store/selector/Glocery.selector';

@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css',
})
export class GroceryComponent {
  groceries$?: Observable<Grocery[]>;
  groceriesType$?: Observable<Grocery[]>;

  constructor(private store: Store<{ groceries: Grocery[] }>) {
    this.groceries$ = store.select(selectorGlocery);
  }

  onTypeChange(event: Event) {
    console.log('onTypeChange', (event.target as HTMLSelectElement).value);
    let selectedType = (event.target as HTMLSelectElement).value;
    if (selectedType)
      this.groceriesType$ = this.store.select(
        selectorGroceryType((event.target as HTMLSelectElement).value)
      );
    else {
      this.groceriesType$ = undefined;
    }
  }

  increment(item: Grocery) {
    const payload = {
      id: item.id,
      name: item.name,
      quantity: 1,
    };
    // this.store.dispatch({ type: 'increment', payload: payload });
    // this.store.dispatch(addToBucket({ id: payload.id, name: payload.name }));
    this.store.dispatch(addToBucket({ payload }));
  }
  decrement(item: Grocery) {
    const payload = {
      id: item.id,
      name: item.name,
    };
    this.store.dispatch(removeFromBucket({ payload }));
  }
}
