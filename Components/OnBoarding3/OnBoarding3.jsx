import React from 'react';
import {Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import imageSrc from '../../assets/Images/onboarding3.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import TextShared from '../TextShared/TextShared';
import { useTranslation } from 'react-i18next';

export default function OnBoarding3() {
  const navigation = useNavigation();
  const { t } = useTranslation();

  const handleGetStarted = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.textContainer}>
        {/* title text */}
        <TextShared
          text="onBoarding3.title"
          fontWeight={'700'}
          fontSize={18}
        />
        {/* body text */}
        <TextShared
          text="onBoarding3.description"
          fontWeight={'400'}
          fontSize={16}
          textAlign="center"
        />
      </View>
      {/* image container */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSrc} />
        <View style={styles.btnContainer}>
          <PrimaryButton text={t('onBoarding3.getStarted')} onPress={handleGetStarted} />
        </View>
      </View>
    </View>
  );
}
