import React from 'react';

type Props = {
  refine: (query: string) => void;
  query?: string;
  placeholder?: string;
};

export const SearchBoxComponent = ({ refine, query, placeholder }: Props) => {
  return (
    <div>
      <input
        type="search"
        placeholder={placeholder ?? 'Search here...'}
        value={query}
        onChange={(event) => {
          refine(event.target.value);
        }}
      />
    </div>
  );
};
