import React from 'react';
import { Button, Text, View } from 'react-native';

import { StyleSheet, UnistylesRuntime, withUnistyles } from 'react-native-unistyles';

const UniButton = withUnistyles(Button, (theme) => ({
  color: theme.colors.primary,
}));

const App = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>aaa</Text>
      <UniButton
        title="Change Theme"
        onPress={() => {
          UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'light' ? 'dark' : 'light');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create((theme, rt) => ({
  sectionContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  sectionTitle: {
    textAlign: 'center',
    paddingTop: rt.insets.top,
    fontSize: theme.typography.xl,
    color: theme.colors.onBackground,
  },
}));

export default App;
