import React from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Button, StyleSheet } from 'react-native';
import Avatar from './src/Components/Avatar';
import SettingsCard from './src/Components/Settings';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Avatar />
        <View style={styles.cardContainer}>
          <SettingsCard />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 20,
  },
  cardContainer: {
    marginTop: 20,
    width: '100%',
  },
});
  