import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import Splash from '../../Components/Splash/Splash';

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('OnBoardingScreen');
    }, 3000); // Navigate after 3 seconds
    return () => clearTimeout(timer);
  }, [navigation]);

  return <Splash />;
}
