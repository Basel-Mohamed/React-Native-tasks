import {
  View,
  FlatList,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useCallback} from 'react';
import UpperNavbar from '../UpperNavbar/UpperNavbar';
import MainBanner from '../MainBanner/MainBanner';
import Attendence from '../Attendence/Attendence';
import styles from './style';
import CarouselIndicators from '../Indicator/Indicator';
import TextShared from '../TextShared/TextShared';
import DashboardIcon from '../../assets/Images/dashboardIcon.svg';
import QuickImage from '../../assets/Images/QuickImage.svg';
import SettingImage from '../../assets/Images/settingImage.svg';
import Actions from '../Actions/Actions';
import Charts from '../Charts/Charts';
import LowerNav from '../LowerNav/LowerNav';

// Fake data - Extracted outside component to prevent recreation on each render
const banners = [
  {
    id: 1,
    title: 'Eid al-Adha holiday date',
    description:
      'Based on the decision of the Ministry of Manpower, the vacation will be from the 12th to the 16th Jun.',
    image: require('../../assets/Images/bannerImage.png'),
  },
  {
    id: 2,
    title: 'Second Slide',
    description: 'Some other content for the second slide.',
    image: require('../../assets/Images/bannerImage.png'),
  },
  {
    id: 3,
    title: 'Third Slide',
    description: 'Even more details in this third slide.',
    image: require('../../assets/Images/bannerImage.png'),
  },
];

const {width} = Dimensions.get('window');

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  // Memoized functions to prevent recreating on each render
  const handleIndicatorPress = useCallback(index => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        index,
        animated: true,
      });
      setActiveIndex(index);
    }
  }, []);

  const handleMomentumScrollEnd = useCallback(
    event => {
      const scrollPosition = event.nativeEvent.contentOffset.x;
      const index = Math.round(scrollPosition / width);
      setActiveIndex(index);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [width],
  );

  const renderItem = useCallback(
    ({item}) => (
      <MainBanner
        title={item.title}
        description={item.description}
        imageSrc={item.image}
      />
    ),
    [],
  );

  // Extract keyExtractor to prevent recreation on each render
  const keyExtractor = useCallback(item => item.id.toString(), []);

  // Memoize the indicators to prevent unnecessary re-renders

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}>
        <UpperNavbar />
        <FlatList
          ref={flatListRef}
          data={banners}
          renderItem={renderItem}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={handleMomentumScrollEnd}
          keyExtractor={keyExtractor}
          initialNumToRender={1}
          maxToRenderPerBatch={1}
          windowSize={3}
        />

        {/* Using the reusable Indicators component */}
        <CarouselIndicators
          totalItems={banners.length}
          activeIndex={activeIndex}
          onIndicatorPress={handleIndicatorPress}
        />

        {/* Attendance Component */}
        <View style={styles.attendenceContainer}>
          <Attendence />
        </View>

        {/* Charts */}
        <View style={styles.dashboardContainer}>
          <View style={styles.dashboardTextContainer}>
            <DashboardIcon />
            <TextShared
              text={'My Dashboard'}
              color={'rgba(0, 0, 0, 1)'}
              fontSize={16}
              fontWeight={'500'}
            />
          </View>
          <Charts />
        </View>

        {/* Quick actions */}
        <View>
          <View style={styles.quickActionsContainer}>
            <View style={styles.quickActionsTextContainer}>
              <QuickImage />
              <TextShared
                text={'Quick Actions'}
                color={'rgba(0, 0, 0, 1)'}
                fontSize={16}
                fontWeight={'500'}
              />
            </View>
            <TouchableOpacity>
              <SettingImage />
            </TouchableOpacity>
          </View>
          <Actions />
        </View>

        {/* Lower navbar */}
      </ScrollView>
      <View style={styles.lowerNavContainer}>
        <LowerNav />
      </View>
    </View>
  );
}
