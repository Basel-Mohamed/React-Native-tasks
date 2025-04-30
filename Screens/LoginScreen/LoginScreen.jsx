import React from 'react';
import Login from '../../Components/Login/Login';
import {SafeAreaView} from 'react-native';
import styles from './style';

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Login />
    </SafeAreaView>
  );
}
