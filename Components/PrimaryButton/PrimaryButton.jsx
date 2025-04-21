import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './style';
import TextShared from '../TextShared/TextShared';

export default function PrimaryButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <TextShared
        text={text}
        fontWeight={'500'}
        fontSize={20}
        color="#FFFFFF"
      />
    </TouchableOpacity>
  );
}
