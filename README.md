# search-box

_This project was generated with [create-instantsearch-app](https://github.com/algolia/create-instantsearch-app) by [Algolia](https://algolia.com)._

InstantSearch widget that makes a search box

## Install

```bash
npm install @eunjae-lee/search-box
# or
yarn add @eunjae-lee/search-box
```

## Widget

### Usage

```jsx
import instantsearch from 'instantsearch.js';
import algoliasearch from 'algoliasearch/lite';
import { SearchBox } from '@eunjae-lee/search-box';

const searchClient = algoliasearch('appId', 'apiKey');

const App = () => (
  <InstantSearch searchClient={searchClient} indexName="indexName">
    <SearchBox />
  </InstantSearch>
);
```

## Connector

### Usage

```jsx
import { connectSearchBox } from '@eunjae-lee/search-box';

// 1. Create a render function
const RenderSearchBox = (renderOptions, isFirstRender) => {
  // Rendering logic
};

// 2. Create the custom widget
const CustomSearchBox = connectSearchBox(
  RenderSearchBox
);

// 3. Instantiate
const App = () => (
  <InstantSearch searchClient={searchClient} indexName="indexName">
    <CustomSearchBox />
  </InstantSearch>
);
```
