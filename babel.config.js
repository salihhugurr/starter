module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@src': '.',
          '@navigation': './navigation',
          '@config': './config',
          '@providers': './providers',
          '@features': './features',
          '@shared': './shared',
          '@assets': './shared/assets',
          '@components': './shared/components',
          '@hooks': './shared/hooks',
          '@services': './shared/services',
          '@store': './shared/store',
          '@theme': './shared/theme',
          '@utils': './shared/utils',
        },
      },
    ],
    ['react-native-unistyles/plugin'],
  ],
};
