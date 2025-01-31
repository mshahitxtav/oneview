import { GroupByPipe } from '../../utils/groupBy.pipe';
import { AsyncPipe, UpperCasePipe } from '@angular/common';

import { Component } from '@angular/core'; 
import {
  HlmCardContentDirective,
  HlmCardDescriptionDirective,
  HlmCardDirective,
  HlmCardFooterDirective,
  HlmCardHeaderDirective,
  HlmCardTitleDirective,
} from '@spartan-ng/ui-card-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm'
import { NgScrollbarModule } from 'ngx-scrollbar'
import { injectTrpcClient } from '../../../trpc-client';



@Component({
  standalone: true,
  imports: [AsyncPipe, UpperCasePipe, GroupByPipe, HlmButtonDirective, HlmCardContentDirective, HlmCardDescriptionDirective, HlmCardDirective, HlmCardFooterDirective, HlmCardHeaderDirective, HlmCardTitleDirective, NgScrollbarModule],
  template: `
    @if (subscriptions | async; as subs) {
      <div class="flex flex-row items-center p-10 justify-center space-x-2">
        @for (library of subs.librarylist | groupBy: 'libMake'; track library.key) {
          <section hlmCard class="w-1/3">
            <div hlmCardHeader>
              <h3 hlmCardTitle>{{library.key | uppercase}}</h3>
              <ng-scrollbar hlmCardDescription class="h-[75vh]">
                @for(lib of library.value | groupBy: 'libDisplayName'; track lib.key) {
                    <p hlmCardContent>{{lib.key}}</p>
                  }
              </ng-scrollbar>
            </div>
            <p hlmCardFooter><button hlmBtn>Button</button></p>
          </section>
        }
      </div>
    }
  `,
})
export default class HomePage {
  _trpc = injectTrpcClient()
  subscriptions = this._trpc.subscription.get.query();
} 
