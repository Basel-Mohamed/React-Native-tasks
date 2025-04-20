import React from 'react';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import imageSrc from '../../assets/Images/onboarding3.png';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

export default function OnBoarding3() {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.reset({
      index: 0,
      routes: [{name: 'LoginScreen'}],
    });
  };

  return (
    <View style={styles.Container}>
      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>تعزيز عمليات مؤسستك</Text>
        <Text style={styles.textBody}>
          استفد من الميزات المتطورة التي تتجاوز الحدود التقليدية. StaffGateway
          هنا لإحداث ثورة في تجربة المستخدم الخاصة بك وتحويل كيفية تعاملك مع
          العمليات التجارية.
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={imageSrc} />
        <View style={styles.btnContainer}>
          <PrimaryButton text={'Get Started'} onPress={handleGetStarted} />
        </View>
      </View>
    </View>
  );
}
