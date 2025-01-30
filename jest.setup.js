import '@testing-library/jest-dom';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
    }),
    usePathname: () => '/dashboard',
    useSearchParams: () => ({
      get: jest.fn((key) => (key === 'id' ? '123' : null)),
    }),
  }));