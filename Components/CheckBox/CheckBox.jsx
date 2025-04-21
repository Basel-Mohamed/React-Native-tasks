import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import styles from './style';



const CustomCheckbox = ({ value, onValueChange, style }) => {

  // to determine checkbox direction
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => onValueChange(!value)}
      style={[styles.checkboxContainer, style]}>
      {value ? (
        <View style={styles.checkedBox}>
       {/* scaleX in inline style to control direction of checkbox based on the language  */}
          <View style={[styles.checkmark, { transform: [{ rotate: '-45deg' }, { scaleX: isRTL ? -1 : 1 }] }]} />
        </View>
      ) : (
        <View style={styles.uncheckedBox} />
      )}
    </TouchableOpacity>
  );
};

export default CustomCheckbox;