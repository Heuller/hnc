import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    pool: 'threads',
    poolOptions: {
      threads: {
        isolate: false,
        maxThreads: 2,
        minThreads: 1,
      },
    },
    testTimeout: 25000,
    hookTimeout: 25000,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});
