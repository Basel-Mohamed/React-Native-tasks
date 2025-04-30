// CarouselIndicators.js
import React, { useMemo, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

const CarouselIndicators = ({
  totalItems,
  activeIndex,
  onIndicatorPress,
  indicatorStyle,
  activeIndicatorStyle,
  containerStyle,
  gradientColors = ['rgb(48, 169, 224)', 'rgb(4, 33, 77)'],
  gradientStart = { x: 0, y: 0 },
  gradientEnd = { x: 1, y: 0 },
  useGradient = true,
}) => {
  // Memoize the gradient positions to prevent recreating on each render
  const gradientPositions = useMemo(
    () => ({ start: gradientStart, end: gradientEnd }),
    [gradientStart, gradientEnd],
  );

  const renderIndicator = useCallback(
    (index) => {
      if (index === activeIndex) {
        if (useGradient) {
          return (
            <LinearGradient
              colors={gradientColors}
              start={gradientPositions.start}
              end={gradientPositions.end}
              style={[styles.indicator, styles.activeIndicator, activeIndicatorStyle]}
            />
          );
        } else {
          return <View style={[styles.indicator, styles.activeIndicator, activeIndicatorStyle]} />;
        }
      }
      return <View style={[styles.indicator, indicatorStyle]} />;
    },
    [activeIndex, gradientColors, gradientPositions, useGradient, indicatorStyle, activeIndicatorStyle],
  );

  // Memoize the indicators to prevent unnecessary re-renders
  const indicators = useMemo(() => {
    return Array(totalItems)
      .fill(0)
      .map((_, index) => (
        <TouchableOpacity key={index} onPress={() => onIndicatorPress(index)}>
          {renderIndicator(index)}
        </TouchableOpacity>
      ));
  }, [totalItems, onIndicatorPress, renderIndicator]);

  return <View style={[styles.indicatorsWrapper, containerStyle]}>{indicators}</View>;
};

export default CarouselIndicators;