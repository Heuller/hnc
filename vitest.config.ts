import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    pool: 'threads',
    testTimeout: 20000,
    hookTimeout: 20000,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});
