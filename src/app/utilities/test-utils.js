
export function createMockRouter(overrides) {
    return {
      basePath: '',
      pathname: '/',
      route: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      replace: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      isFallback: false,
      ...overrides, // Allow overriding values
    };
  }