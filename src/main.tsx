import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import ReactDOM from 'react-dom';
// @ts-expect-error
import { InstantSearch, Hits } from 'react-instantsearch-dom';

import { SearchBox } from '.';

const searchClient = algoliasearch(
  'latency',
  '6be0576ff61c053d5f9a3225e2a90f76'
);

ReactDOM.render(
  <React.StrictMode>
    <InstantSearch indexName="instant_search" searchClient={searchClient}>
      <SearchBox placeholder="Search:" />
      <Hits />
    </InstantSearch>
  </React.StrictMode>,
  document.getElementById('root')
);
