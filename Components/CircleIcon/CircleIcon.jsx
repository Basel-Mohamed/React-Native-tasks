import React, { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import styles from './style';




const CircleIcon = ({ color = "#000", delay = 0 }) => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startAnimation = () => {
      const bounce = Animated.sequence([
        Animated.timing(translateY, {
          toValue: -10,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 500,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ]);


// initail delay
      setTimeout(() => {
        Animated.loop(bounce).start();
      }, delay);
    };

    startAnimation();
  }, [translateY, delay]);

  return (
    <Animated.View
      style={[
        styles.circle,
        { backgroundColor: color, transform: [{ translateY }] },
      ]}
    />
  );
};

export default CircleIcon;
