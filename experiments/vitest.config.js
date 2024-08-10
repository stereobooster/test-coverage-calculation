import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      provider: "istanbul",
      ignoreEmptyLines: true,
    },
  },
  // test: {
  //   coverage: {
  //     provider: "custom",
  //     customProviderModule: "vitest-monocart-coverage",
  //   },
  // },
  // test: {
  //   coverage: {
  //     provider: "v8",
  //     ignoreEmptyLines: true,
  //   },
  // },
});
