## Tools

- istanbul-based
  - nyc
  - `@vitest/coverage-istanbul`
- v8-based
  - https://github.com/bcoe/c8
  - `@vitest/coverage-v8`
  - https://github.com/cenfun/monocart-coverage-reports
  - https://gitlab.com/nightlycommit/one-double-zero

## Comparison of statements coverage

|               | `@vitest/coverage-istanbul` | `vitest-monocart-coverage` | `@vitest/coverage-v8` |
| ------------- | --------------------------- | -------------------------- | --------------------- |
| example0.1.js | 1/1                         | 2/2                        | 3/3                   |
| example0.2.js | 3/3                         | 4/4                        | 4/4                   |
| example0.3.js | 3/3                         | 4/4                        | 6/6                   |
| example1.1.js | 5/5                         | 6/6                        | 5/5                   |
| example1.2.js | 6/6                         | 7/7                        | 6/6                   |
| example1.3.js | 6/6                         | 7/7                        | 6/6                   |
| example1.4.js | 8/8                         | 9/9                        | 7/7                   |
| example1.5.js | 5/5                         | 6/6                        | 8/8                   |
| example2.1.js | 6/6                         | 8/8                        | 7/7                   |
| example3.1.js | 1/1                         | 2/2                        | 3/3                   |
| example3.2.js | 1/1                         | 2/2                        | 3/3                   |
| example3.3.js | 1/1                         | 2/2                        | 3/3                   |
| example3.4.js | 3/3                         | 4/4                        | 7/7                   |
| example4.1.js | 5/5                         | 7/7                        | 11/11                 |
| example4.2.js | 5/5                         | 6/6                        | 9/9                   |
| example4.3.js | 5/5                         | 6/6                        | 10/10                 |
| example4.4.js | 6/6                         | 7/7                        | 12/12                 |
| example5.1.js | 5/5                         | 6/6                        | 9/9                   |
| example6.1.js | 4/4                         | 4/4                        | 6/6                   |
| example6.2.js | 3/3                         | 4/4                        | 6/6                   |
| example7.1.js | 1/1                         | 2/2                        | 3/3                   |
| example8.1.js | 1/3                         | 2/4                        | 2/5                   |
