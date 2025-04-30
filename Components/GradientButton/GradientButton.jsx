import {TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import TextShared from '../TextShared/TextShared';

export default function GradientButton({
  title,
  onPress,
  gradientArray = ['#4c669f', '#3b5998', '#192f6a'],
  buttonStyle,
  gradientStyle,
  rtl,
  ltr,
  utb,
  btu,
}) {
    let start = {x: 0, y: 0};
    let end = {x: 1, y: 0};
  
    if (rtl) {
      start = {x: 1, y: 0};
      end = {x: 0, y: 0};
    } else if (ltr) {
      start = {x: 0, y: 0};
      end = {x: 1, y: 0};
    } else if (utb) {
      start = {x: 0, y: 0};
      end = {x: 0, y: 1};
    } else if (btu) {
      start = {x: 0, y: 1};
      end = {x: 0, y: 0};
    }
  // Removed redundant declarations
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <LinearGradient
        colors={gradientArray}
        style={gradientStyle}
        start={start}
        end={end}>
        <TextShared text={title} color={'white'} fontSize={13} fontWeight={'700'} />
      </LinearGradient>
    </TouchableOpacity>
  );
}
