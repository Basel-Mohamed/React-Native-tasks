import {View} from 'react-native';
import React from 'react';
import TextShared from '../TextShared/TextShared';
import styles from './style';

export default function BusinessTripChart({used = 0, available = 0}) {
  const total = used + available;
  const usedPercentage = (used / total) * 100 + '%';

  return (
    <View style={styles.container}>
      <TextShared
        fontSize={14}
        color={'rgba(243, 247, 255, 1)'}
        fontWeight={'600'}
        text={'Business Trips'}
        style={styles.title}
      />
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBarUsed, {width: usedPercentage}]} />
        <View style={styles.progressBarAvailable} />
      </View>
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#FFA726'}]} />
          <View>
            <TextShared
              style={styles.legendText}
              text={'Used'}
              color={'rgba(243, 247, 255, 1)'}
              fontSize={12}
              fontWeight={'500'}
            />
            <TextShared
              color={'rgba(243, 247, 255, 1)'}
              fontSize={12}
              fontWeight={'700'}
              style={styles.legendValue}
              text={used}
            />
          </View>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendColor, {backgroundColor: '#D9D9D9'}]} />
          <View>
            <TextShared
              style={styles.legendText}
              text={'Available'}
              color={'rgba(243, 247, 255, 1)'}
              fontSize={12}
              fontWeight={'500'}
            />
            <TextShared
              color={'rgba(243, 247, 255, 1)'}
              fontSize={12}
              fontWeight={'700'}
              style={styles.legendValue}
              text={available}
            />
          </View>
        </View>
      </View>
    </View>
  );
}


