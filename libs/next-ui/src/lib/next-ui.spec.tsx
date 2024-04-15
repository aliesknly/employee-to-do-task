import { render } from '@testing-library/react';

import NextUi from './next-ui';

describe('NextUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NextUi />);
    expect(baseElement).toBeTruthy();
  });
});
