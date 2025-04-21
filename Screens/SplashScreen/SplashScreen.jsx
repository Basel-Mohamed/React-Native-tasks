import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Splash from '../../Components/Splash/Splash';
import SplashScreen from 'react-native-splash-screen';

export default function SplashScreenComponent() {
  const navigation = useNavigation();

  React.useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      try {
        if (SplashScreen) {
          SplashScreen.hide();
        }
        navigation.replace('OnBoardingScreen');
      } catch (error) {
        console.log('Splash screen error:', error);
        navigation.replace('OnBoardingScreen');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return <Splash />;
}
