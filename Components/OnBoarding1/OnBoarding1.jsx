import React from 'react';
import { Image, View } from 'react-native';
import styles from './style';
import imageSrc from '../../assets/Images/onboarding1.png';
import TextShared from '../TextShared/TextShared';

export default function OnBoarding1() {
  return (
    <View style={styles.Container}>
      <View style={styles.textContainer}>
        {/* title text */}
        <TextShared
          text="onBoarding1.title"
          fontWeight={'700'}
          fontSize={18}
        />
        {/* body text */}
        <TextShared
          text="onBoarding1.description"
          fontWeight={'400'}
          fontSize={16}
          textAlign="center"
        />
      </View>
      {/* image container */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSrc} />
      </View>
    </View>
  );
}
