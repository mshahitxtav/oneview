import { Directive, computed, input } from '@angular/core';
import { hlm } from '@spartan-ng/brain/core';
import { HlmSeparator } from '@spartan-ng/helm/separator';

import type { ClassValue } from 'clsx';

@Directive({
  selector: 'brn-separator[hlmSidebarSeparator]',
  standalone: true,
  hostDirectives: [{ directive: HlmSeparator }],
  host: {
    'data-sidebar': 'separator',
    '[class]': '_computedClass()',
  },
})
export class HlmSidebarSeparatorDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });

  protected _computedClass = computed(() =>
    hlm('w-auto bg-sidebar-border', this.userClass()),
  );
}
