import React from 'react';

type Props = {
  refine: (query: string) => void;
  query?: string;
};

export const SearchBoxComponent = ({ refine, query }: Props) => {
  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(event) => {
          refine(event.target.value);
        }}
      />
    </div>
  );
};
