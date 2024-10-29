import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
      return;
    }
    
    // In a real app, you would perform actual authentication here
    console.log('Login pressed');
    router.replace('../(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>naper.io</Text>
      <Text style={styles.subtitle}>Your Public Transport Needs, Fulfilled at a glance.</Text>
      
      <TextInput
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      
      <TextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      
      <Link href="/forgot-password" style={styles.link}>
        Forgot password?
      </Link>
      
      <Button mode="contained" style={styles.button} onPress={handleLogin}>
        Log in
      </Button>
      
      <Text style={styles.signUp}>
        Don't have an account?{' '}
        <Link href="/signup" style={styles.link}>
          Sign Up!
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#6200ee',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    color: '#666',
  },
  input: {
    marginBottom: 10,
  },
  link: {
    color: '#6200ee',
    textAlign: 'right',
    marginBottom: 20,
  },
  button: {
    marginBottom: 20,
    backgroundColor: '#6200ee',
  },
  signUp: {
    textAlign: 'center',
  },
});
