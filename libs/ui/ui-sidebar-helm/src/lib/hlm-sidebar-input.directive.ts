import { Directive, ElementRef, computed, OnInit } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { HlmInput, inputVariants } from '@spartan-ng/helm/input';

@Directive({
  selector: 'input[hlmSidebarInput]',
  standalone: true,
  host: {
    'data-sidebar': 'input',
    '[class]': '_computedClass()',
  },
})
export class HlmSidebarInputDirective
  extends HlmInput
  implements OnInit
{
  override readonly _computedClass = computed(() =>
    hlm(
      inputVariants({ error: this._state().error }),
      'h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring',
      this.userClass(),
    ),
  );

  constructor(private element: ElementRef<HTMLInputElement>) {
    super();
  }

  ngOnInit() {
    if (this.element.nativeElement.tagName.toLowerCase() !== 'input') {
      console.warn(
        'hlmSidebarInput directive should only be used on <input> elements',
      );
    }
  }
}
