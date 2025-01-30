import { render, screen } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import Navbar from '../src/app/components/navbar';
import {createMockRouter} from '../src/app/utilities/test-utils'; // Helper function to mock Next.js router
import {expect} from '@jest/globals'

// testing the navbar component
test('renders navigation links', () => {
  render(
    <RouterContext.Provider value={createMockRouter({ pathname: '/' })}>
      <Navbar />
    </RouterContext.Provider>
  );

  expect(screen.getByText('contact')).toBeInTheDocument();
  expect(screen.getByText('My account')).toBeInTheDocument();
});
