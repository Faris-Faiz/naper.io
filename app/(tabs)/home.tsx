import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>naper.io</Text>
      <Text style={styles.subtitle}>Your Public Transport Needs, Fulfilled at a glance.</Text>
      <Text style={styles.content}>Welcome to your personalized transport dashboard.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200ee',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
});
