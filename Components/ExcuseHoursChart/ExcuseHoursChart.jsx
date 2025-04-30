import React from 'react';
import {View} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import TextShared from '../TextShared/TextShared';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';


const ExcuseHoursChart = () => {
  const barData = [
    {value: 6, frontColor: 'rgba(255, 202, 49, 1)'},
    {value: 12, frontColor: 'rgba(117, 237, 27, 1)'},
  ];

  return (
    <LinearGradient
      colors={['rgba(10, 103, 136, 1)', 'rgba(47, 169, 224, 1)']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}>
      <View style={styles.headerContainer}>
        <TextShared
          text={'Excuse Hours'}
          fontSize={14}
          fontWeight={'600'}
          color={'#F3F7FF'}
        />
        <TextShared
          style={styles.month}
          text={'July'}
          fontSize={8}
          color={'#F3F7FF'}
          fontWeight={'700'}
        />
      </View>
      <View style={styles.barChartContainer}>
        <BarChart
          data={barData}
          barWidth={42}
          spacing={12}
          maxValue={14}
          yAxisTextStyle={{color: 'rgba(255, 255, 255, 1)', fontSize: 6}}
          isAnimated
          animationDuration={300}
          barBorderTopLeftRadius={6}
          barBorderTopRightRadius={6}
          initialSpacing={10}
          height={160}
          width={165}
          stepValue={2}
          yAxisThickness={0}
          xAxisType="bold"
          xAxisColor={'rgba(255, 255, 255, 1)'}
          dashWidth={3}
          dashGap={4}
        />
      </View>

      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendColor,
              {backgroundColor: 'rgba(255, 202, 49, 1)'},
            ]}
          />
          <View>
            <TextShared
              text={'Consumed'}
              color={'#F3F7FF'}
              fontSize={10}
              fontWeight={'500'}
              style={styles.legendText}
            />
            <TextShared
              fontSize={10}
              fontWeight={'700'}
              color={'#F3F7FF'}
              style={styles.legendValue}
              text={'6'}
            />
          </View>
        </View>
        <View style={styles.legendItem}>
          <View
            style={[
              styles.legendColor,
              {backgroundColor: 'rgba(117, 237, 27, 1)'},
            ]}
          />
          <View>
            <TextShared
              fontSize={10}
              fontWeight={'500'}
              color={'#F3F7FF'}
              style={styles.legendText}
              text={'Remaining'}
            />
            <TextShared
              fontSize={10}
              fontWeight={'700'}
              color={'#F3F7FF'}
              style={styles.legendValue}
              text={'12'}
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};



export default ExcuseHoursChart;
