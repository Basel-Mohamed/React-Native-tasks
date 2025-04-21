import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {setFontFamily} from '../../assets/fonts/Helper';

const NewPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcomeText: {
    fontSize: 32,
    fontFamily: setFontFamily('700'),
    color: '#0083B0',
  },
});

export default NewPage; 