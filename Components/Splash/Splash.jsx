import React from 'react';
import {Image, View} from 'react-native';
import splashImage from '../../Public/logolight.png';
import style from './style';
import CircleIcon from '../CircleIcon/CircleIcon';

export default function Splash() {
  return (
    <View style={style.container}>
      <View style={style.imageContainer}>
        <Image style={style.image} source={splashImage} />
      </View>
      <View style={style.CirclesContainer}>
        <CircleIcon color="#E43834" delay={0} />
        <CircleIcon color="#1E88E4" delay={200} />
        <CircleIcon color="#43A047" delay={400} />
        <CircleIcon color="#FCD734" delay={600} />
        <CircleIcon color="#FB8B00" delay={800} />
      </View>
    </View>
  );
}
