import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import imageSrc from '../../assets/Images/onboarding1.png';

export default function OnBoarding1() {
  return (
    <View style={styles.Container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>مرحباً بك في Staffegatway</Text>
        <Text style={styles.textBody}>
          الحل الشامل لتجربة عمل سلسة وفعالة. يمكنك التنقل عبر واجهة سهلة
          الاستخدام مصممة لتعزيز مهامك اليومية وإنتاجيتك بشكل عام.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSrc} />
      </View>
    </View>
  );
}
