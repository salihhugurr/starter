module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': './src',
          '@navigation': './src/navigation',
          '@config': './src/config',
          '@providers': './src/providers',
          '@features': './src/features',
          '@shared': './src/shared',
          '@assets': './src/shared/assets',
          '@components': './src/shared/components',
          '@hooks': './src/shared/hooks',
          '@services': './src/shared/services',
          '@store': './src/shared/store',
          '@theme': './src/shared/theme',
          '@utils': './src/shared/utils',
        },
      },
    ],
    ['react-native-unistyles/plugin'],
  ],
};
