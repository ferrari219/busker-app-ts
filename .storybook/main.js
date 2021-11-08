module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.module.rules.unshift({ test: /\.svg$/, use: ["@svgr/webpack"] });
    config.resolve.modules = [
      path.resolve(__dirname, ".."),
      "node_modules",
      "styles",
    ];
    config.resolve.alias = {
      ...config.resolve.alias,
      // "@components": path.resolve(__dirname, "../src/components"),
      // "@assets": path.resolve(__dirname, "../src/assets"),
      // "@styles": path.resolve(__dirname, "../src/styles"),
    };
    return config;
  },
};
