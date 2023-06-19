module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: 'env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          assets: './src/assets',
          components: './src/components',
          lib: './src/lib',
          screens: './src/screens',
          services: './src/services',
          shared: './src/shared',
          stores: './src/stores',
          utils: './src/utils',
          layout: './src/Layout',
          methods: './src/methods',
        },
      },
    ],
  ],
};
