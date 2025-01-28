import { AsyncPipe, JsonPipe } from '@angular/common';

 import { Component } from '@angular/core'; 
import { injectTrpcClient } from '../../../trpc-client';



@Component({
  standalone: true,
  imports: [JsonPipe, AsyncPipe],
  template: `
     @if (subscriptions | async; as subs) {
      {{ subs | json}}
     }
  `,
})
export default class HomePage {
  _trpc = injectTrpcClient()
  subscriptions = this._trpc.subscription.get.query();
} 
