import { SearchBoxComponent } from './component';
import { connectSearchBox } from './connector';

import type { ElementType } from 'react';

type WidgetParams = {
  /**
   * Placeholder text for input element.
   */
  placeholder?: string;
};

type Widget<TWidgetParams = any> = ElementType<TWidgetParams>;

export const SearchBox: Widget<WidgetParams> =
  connectSearchBox(SearchBoxComponent);
