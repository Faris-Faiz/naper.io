import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, TextInput, HelperText, Modal, Portal } from 'react-native-paper';
import { useRouter, Link } from 'expo-router';
import {styles as loginStyles } from './login';
import { useAction } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { ConvexError } from 'convex/values';

export default function SignUpScreen() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const register = useAction(api.actions.doRegister);

  const handleLogin = async () => {
    setIsSubmitting(true);
    try {
      await register({ username, password })
      // console.log(`Registered ${username} with password ${password}`);
      setError('');
      setShowModal(true);
    } catch (error) {
      console.log('Error registering', error);
      
      if (error instanceof ConvexError) {
        setError(error.data);
      }
    }
    setIsSubmitting(false);
  }

  useEffect(() => {
    console.log('useEffect', username, password);
    
    if (username.length > 0 && password.length > 0) 
      setIsSubmitting(false)
    else
      setIsSubmitting(true)
    }, [username, password])

  const dismissModal = () => {
    router.replace('/login');
  }

  return (
    <View style={loginStyles.container}>
      <Portal>
        <Modal visible={showModal} onDismiss={dismissModal} contentContainerStyle={styles.modal}>
          <Text variant='titleSmall'>Register succesfull</Text>
        </Modal>
      </Portal>
      <Text style={loginStyles.title}>naper.io</Text>
      <Text style={loginStyles.subtitle}>Your Public Transport Needs, Fulfilled at a glance.</Text>
      
      <TextInput
        maxLength={20}
        label="Username"
        value={username}
        onChangeText={setUsername}
        style={loginStyles.input}
      />
      
      <TextInput
        maxLength={20}
        label="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={loginStyles.input}
      />
      
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
      
      <Button mode="contained" style={styles.button} onPress={handleLogin}
        disabled={isSubmitting}>
        Register
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
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    marginTop: 20,
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
  }
});

