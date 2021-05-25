import { createConnector } from 'react-instantsearch-dom';

export const connectSearchBox = createConnector({
  displayName: 'SearchBox',

  getProvidedProps(props, _searchState, _searchResults) {
    return {
      query: props.query,
      placeholder: props.placeholder,
    };
  },

  refine(_props, searchState, nextRefinement) {
    return {
      ...searchState,
      query: nextRefinement,
    };
  },

  cleanUp(_props, searchState, _context) {
    const { query, ...rest } = searchState;
    return rest;
  },

  getSearchParameters(searchParameters, _props, searchState) {
    return searchParameters.setQuery(searchState.query);
  },
});
