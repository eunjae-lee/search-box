import { createConnector } from 'react-instantsearch-dom';

export const connectSearchBox = createConnector({
	displayName: 'SearchBox',

	getProvidedProps(props, _searchState, _searchResults) {
		return {
			// TODO: return a props for the component
		};
	},

	refine(_props, searchState, nextRefinement) {
		return {
			// TODO: return a next searchState
		};
	},

	cleanUp(_props, searchState, _context) {
		return {
			// TODO: return a searchState where this widget is removed from the widget tree
		};
	},

	getSearchParameters(searchParameters, _props, searchState) {
		// TODO: update and return the searchParameters
		return searchParameters;
	},
});
