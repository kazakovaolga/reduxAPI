module.exports = {
  parser: "postcss-scss",
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": { browsers: "last 2 versions" },
    cssnano: {},
  },
};
