import { Directive, ElementRef, computed, input, OnInit } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';

import type { ClassValue } from 'clsx';

@Directive({
  selector: 'button[hlmSidebarGroupAction]',
  standalone: true,
  host: {
    'data-sidebar': 'group-action',
    '[class]': '_computedClass()',
  },
})
export class HlmSidebarGroupActionDirective implements OnInit {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  protected _computedClass = computed(() =>
    hlm(
      'absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0 hover:cursor-pointer disabled:hover:cursor-default',
      // Increases the hit area of the button on mobile.
      'after:absolute after:-inset-2 after:md:hidden',
      'group-data-[collapsible=icon]:hidden',
      this.userClass(),
    ),
  );

  constructor(private element: ElementRef<HTMLButtonElement>) {}

  ngOnInit() {
    if (this.element.nativeElement.tagName.toLowerCase() !== 'button') {
      console.warn(
        'hlmSidebarGroupAction directive should only be used on <button> elements',
      );
    }
  }
}
