import React from 'react';
import {Image, View} from 'react-native';
import styles from './style';
import src from '../../assets/Images/onboarding2.png';
import TextShared from '../TextShared/TextShared';

export default function OnBoarding2() {
  return (
    <View style={styles.Container}>
      {/* image container */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={src} />
      </View>
      <View style={styles.textContainer}>
        {/* title text */}
        <TextShared
          text="onBoarding2.title"
          fontWeight={'700'}
          fontSize={18}
          textAlign="center"
        />
        {/* body text */}
        <TextShared
          text="onBoarding2.description"
          fontWeight={'400'}
          fontSize={16}
          textAlign="center"
        />
      </View>
    </View>
  );
}
