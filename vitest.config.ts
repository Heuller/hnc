import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    pool: 'forks',
    maxWorkers: 2,
    testTimeout: 30000,
    hookTimeout: 30000,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});
