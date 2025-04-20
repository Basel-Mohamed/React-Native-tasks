import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import styles from './style';

export default function PrimaryButton({text, onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
