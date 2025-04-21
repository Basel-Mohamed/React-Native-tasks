import React, {useState, useRef, useEffect} from 'react';
import {View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import OnBoarding1 from '../../Components/OnBoarding1/OnBoarding1';
import OnBoarding2 from '../../Components/OnBoarding2/OnBoarding2';
import styles from './style';
import OnBoarding3 from '../../Components/OnBoarding3/OnBoarding3';
import { useTranslation } from 'react-i18next';

const {width} = Dimensions.get('window');

export default function OnBoardingScreen() {
  const [currentPage, setCurrentPage] = useState(0);
  const scrollViewRef = useRef(null);
  const { i18n } = useTranslation();
  const [isRTL, setIsRTL] = useState(i18n.language === 'ar');

  // Update RTL state when language changes
  useEffect(() => {
    setIsRTL(i18n.language === 'ar');
  }, [i18n.language]);

  // number of pages
  const totalPages = 3;

  // move to current page
  const goToPage = pageIndex => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({x: pageIndex * width, animated: true});
      setCurrentPage(pageIndex);
    }
  };

  // handle Scrolling
  const handleScroll = event => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const page = Math.round(offsetX / width);
    if (page !== currentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        style={styles.scrollView}>
        {/* Page 1 */}
        <View style={styles.page}>
          <OnBoarding1 />
        </View>

        {/* Page 2 */}
        <View style={styles.page}>
          <OnBoarding2 />
        </View>
        <View style={styles.page}>
          <OnBoarding3 />
        </View>
      </ScrollView>

      {/* indicator */}
      {currentPage !== (isRTL ? 0 : 2) && (
        <View style={styles.paginationContainer}>
          {Array(totalPages)
            .fill()
            .map((_, index) => {
              // Reverse the index for RTL
              const displayIndex = isRTL ? totalPages - 1 - index : index;
              return (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.paginationDot,
                    currentPage === displayIndex && styles.paginationDotActive,
                  ]}
                  onPress={() => goToPage(displayIndex)}
                />
              );
            })}
        </View>
      )}
    </View>
  );
}
