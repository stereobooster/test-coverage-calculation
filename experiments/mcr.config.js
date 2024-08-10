export default {
  reports: [
    // ["v8"],
    // ["console-details"],
    ["html"],
  ],
  outputDir: "coverage",
  all: {
    filter: {
      "**/node_modules/**": false,
      "**/test/**": false,
      "**/src/**": true,
    },
  },
};
