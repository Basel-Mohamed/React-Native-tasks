import {View, ImageBackground} from 'react-native';
import React from 'react';
import TextShared from '../TextShared/TextShared';
import styles from './style';
import backgroundImaged from '../../assets/Images/AttendenceImage.png';
import LocationIcon from '../../assets/Images/locationIcon.svg';
import Clipboard from '../../assets/Images/clipboardIcon.svg';
import GradientButton from '../GradientButton/GradientButton';

export default function Attendence() {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <View style={styles.container}>
      {/* Date Row */}
      <ImageBackground source={backgroundImaged} style={styles.imageBackground}>
        <View style={styles.upperDateContainer}>
          <View style={styles.dateRow}>
            <LocationIcon width={16} height={16} />
            <TextShared
              text={formattedDate}
              color="rgba(255, 255, 255, 1)"
              fontSize={13}
              fontWeight={'400'}
            />
          </View>
          <View style={styles.clipboardContainer}>
            <Clipboard />
          </View>
        </View>

        {/* Time Display */}
        <TextShared
          text="09:00 AM - 5:00 PM"
          fontSize={17}
          color={'rgba(255, 255, 255, 1)'}
          fontWeight={'700'}
        />

        {/* Check-in Info */}
        <View
          style={styles.shiftTimeContainer}>
          <View>
            <View style={styles.checkInfoRow}>
              <TextShared
                text="Check in: "
                color="rgba(255, 255, 255, 0.84)"
                fontSize={13}
                fontWeight="400"
              />
              <TextShared
                text="10:00 AM"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={13}
                fontWeight="400"
              />
            </View>

            {/* Check-out Info */}
            <View style={styles.checkInfoRow}>
              <TextShared
                text="Check out: "
                color="rgba(255, 255, 255, 0.84)"
                fontSize={13}
                fontWeight="400"
              />
              <TextShared
                text="5:00 PM"
                color="rgba(255, 255, 255, 0.84)"
                fontSize={13}
                fontWeight="400"
              />
            </View>
          </View>

          {/* Buttons */}
          <View style={styles.buttonsContainer}>
            <View style={styles.btnChecks}>
              <GradientButton
                title={'Check In'}
                gradientArray={['rgba(13, 50, 89, 1)', 'rgba(48, 169, 224, 1)']}
                gradientStyle={styles.gradientBtn}
                btu={true}
              />
            </View>

            <View style={styles.btnChecks}>
              <GradientButton
                title={'Check Out'}
                gradientArray={['rgba(13, 50, 89, 1)', 'rgba(48, 169, 224, 1)']}
                gradientStyle={styles.gradientBtn}
                utb={true}
              />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
