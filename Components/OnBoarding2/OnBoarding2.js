import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import src from '../../assets/Images/onboarding2.png';

export default function OnBoarding2() {
  return (
    <View style={styles.Container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={src} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>الخدمات الذاتية الشاملة</Text>
        <Text style={styles.textBody}>
          قم بتمكين نفسك من خلال الخدمات الذاتية الشاملة. يمكنك الوصول إلى
          مجموعة واسعة من أدوات الخدمة الذاتية التي تبسط حياتك العملية. قم
          بإدارة الإجازات والحضور وبيانات الرواتب والطلبات والموافقات والأذونات
          والمزيد بسهولة من جهازك المحمول.
        </Text>
      </View>
    </View>
  );
}
