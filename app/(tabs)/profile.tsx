import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you would perform logout logic here
    router.replace('/login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>naper.io</Text>
      <Text style={styles.subtitle}>Your Public Transport Needs, Fulfilled at a glance.</Text>
      <Text style={styles.content}>Your naper.io profile information</Text>
      <Button mode="contained" style={styles.button} onPress={handleLogout}>
        Logout
      </Button>
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
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6200ee',
  },
});
