module.exports = {
  plugins: [
    require("postcss-import"),
    require("postcss-preset-env")({
      stage: 1,
    }),
    require("postcss-custom-properties"),
    require("postcss-nested"),
    require("autoprefixer")
  ]
};
