import { Text } from 'react-native';
import React from 'react';
import { setFontFamily } from '../../assets/fonts/Helper';
import { scaleFontSize } from '../../assets/Styles/scaling';
import { useTranslation } from 'react-i18next';

export default function TextShared({
  style,
  text = 'no_text_yet', 
  color = '#000',
  fontSize = 16,
  fontWeight = 400,
  textAlign = 'auto',
  // to stop translation 
  translate = true, 
}) {
  const { t } = useTranslation();

  return (
    <Text
      style={[{
        color: color,
        fontSize: scaleFontSize(fontSize),
        fontFamily: setFontFamily(fontWeight),
        textAlign: textAlign,
      }, style]}>
      {translate ? t(text) : text}
    </Text>
  );
}

