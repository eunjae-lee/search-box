import { SearchBoxComponent } from './component';
import { connectSearchBox } from './connector';

import type { ElementType } from 'react';

type WidgetParams = {
  /**
   * Placeholder text for input element.
   */
  placeholder?: string;
};

export const SearchBox: ElementType<WidgetParams> =
  connectSearchBox(SearchBoxComponent);
