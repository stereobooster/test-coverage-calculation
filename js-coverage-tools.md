## Tools

- istanbul-based
  - nyc
  - `@vitest/coverage-istanbul`
- v8-based
  - https://github.com/bcoe/c8
  - `@vitest/coverage-v8`
  - https://github.com/cenfun/monocart-coverage-reports
  - https://gitlab.com/nightlycommit/one-double-zero

## Comparison of branch coverage

|               | `@vitest/coverage-istanbul` | `vitest-monocart-coverage` | `@vitest/coverage-v8` | what I expect |
| ------------- | --------------------------- | -------------------------- | --------------------- | ------------- |
| example0.1.js | 0/0                         | 0/0                        | 1/1                   | 1/1           |
| example0.2.js | 2/2                         | 2/2                        | 2/2                   | 2/2           |
| example1.1.js | 4/4                         | 4/4                        | 4/4                   | 3/3           |
| example1.2.js | 4/4                         | 4/4                        | 3/3                   | 4/4           |
| example1.3.js | 4/4                         | 4/4                        | 3/3                   | 4/4           |
| example1.4.js | 6/6                         | 6/6                        | 4/4                   | 6/6           |
| example2.1.js | 4/4                         | 4/4                        | 4/4                   | 3/3           |
| example3.1.js | 2/2                         | 2/2                        | 2/2                   | 2/2 or 1/1    |
| example3.2.js | 2/2                         | 2/2                        | 2/2                   | 2/2 or 1/1    |
| example3.3.js | 2/2                         | 2/2                        | 3/3                   | 2/2 or 1/1    |
| example3.4.js | 4/4                         | 4/4                        | 3/3                   | 2/2 or 4/4    |
| example4.1.js | 2/2                         | 2/2                        | 3/3                   | 2/2           |
| example4.2.js | **1/1**                     | **1/1**                    | 2/2                   | 2/2           |
| example4.3.js | 2/2                         | 2/2                        | 2/2                   | 2/2           |
| example4.4.js | 3/3                         | **2/3**                    | 3/3                   | 3/3           |
| example5.1.js | 0/0                         | 0/0                        | 2/2                   | 2/2           |
| example6.1.js | 0/0                         | 0/0                        | 2/2                   | 2/2 (ideally) |
| example6.2.js | 0/0                         | 0/0                        | 2/2                   | 2/2           |
| example7.1.js | 0/0                         | 0/0                        | 2/2                   | 2/2           |
| example8.1.js | 0/0                         | 0/0                        | 1/2                   | 1/3           |
