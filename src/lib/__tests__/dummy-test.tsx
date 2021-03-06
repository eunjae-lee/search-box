import { render } from '@testing-library/react';
import React from 'react';
// @ts-expect-error
import { InstantSearch, Hits } from 'react-instantsearch-dom';

import { SearchBox } from '../widget';

const runAllMicroTasks = (): Promise<void> => new Promise(setImmediate);

describe('nothing', () => {
  it('tests nothing', async () => {
    const searchClient = {
      search(_requests: any[]) {
        return Promise.resolve({
          results: [
            {
              hits: [
                {
                  objectID: 'a',
                  name: 'test',
                },
              ],
            },
          ],
        });
      },
    };

    const { debug } = render(
      <InstantSearch indexName="test_index" searchClient={searchClient}>
        <SearchBox />
        <Hits hitComponent={({ hit }: { hit: any }) => hit.name} />
      </InstantSearch>
    );

    await runAllMicroTasks();
    debug();
  });
});
