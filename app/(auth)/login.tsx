import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text, HelperText } from 'react-native-paper';
import { Link, useRouter } from 'expo-router';
import { api } from "@/convex/_generated/api";
import { useAction } from "convex/react";
import { ConvexError } from "convex/values";
import { useAuth } from '@/components/AuthProvider';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  
  const login_endpoint = useAction(api.do_login.doLogin);

  const handleLogin = async () => {
    setIsSubmitting(true);
    if (username.trim() === '' || password.trim() === '') {
      setError('Username and password are required');
      setIsSubmitting(true);
      return;
    }

    try {
      
      const jwt_token = await login_endpoint({ username, password });
      router.replace('/');
      console.log('Logged in with token', jwt_token);

      setError('');
      login(jwt_token);
      router.replace('/');
      
    } catch (error) {

      // debugger
      console.log('Error logging in', error);

      if (error instanceof ConvexError) {
        setError(error.data);
        // return;
      }
    }
    setIsSubmitting(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>naper.io</Text>
      <Text style={styles.subtitle}>Your Public Transport Needs, Fulfilled at a glance.</Text>
      
      <TextInput
        maxLength={20}
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
      />
      
      <TextInput
        maxLength={20}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      
      <Button mode="contained" style={styles.button} onPress={handleLogin}
        disabled={isSubmitting}>
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

export const styles = StyleSheet.create({
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
