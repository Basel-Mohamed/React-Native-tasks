import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import HomeIcon from '../../assets/Images/HomeIcon.svg';
import WorkIcon from '../../assets/Images/WorkIcon.svg';
import WorkingHoursIcon from '../../assets/Images/WorkingHoursIcon.svg';
import ListIcon from '../../assets/Images/ListIcon.svg';
import OtherIcon from '../../assets/Images/OtherIcon.svg';
import styles from './style';
import TextShared from '../TextShared/TextShared';
import activeIconImage from '../../assets/Images/activeIconBackGround.png';

export default function LowerNav() {
  const [activeIcon, setActiveIcon] = useState('Home');

  const handleIconPress = iconName => {
    setActiveIcon(iconName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleIconPress('Home')}>
          <View style={activeIcon === 'Home' && styles.activeIconContainer}>
            <HomeIcon
              width={28}
              height={28}
              color={activeIcon === 'Home' ? '#0083B0' : '#FFFFFF'}
            />
          </View>
          <TextShared
            text={'Home'}
            color={'#FFFFFF'}
            fontSize={14}
            fontWeight={'700'}
            style={[styles.text, activeIcon === 'Home' && styles.activeText]}
          />
          {activeIcon === 'Home' && (
            <Image
              source={activeIconImage}
              style={{position: 'absolute', left: -23, top: -16, zIndex: 0}}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleIconPress('Work')}>
          <View style={activeIcon === 'Work' && styles.activeIconContainer}>
            <WorkIcon
              width={28}
              height={28}
              color={activeIcon === 'Work' ? '#0083B0' : '#FFFFFF'}
            />
          </View>
          <TextShared
            text={'Work'}
            color={'#FFFFFF'}
            fontSize={14}
            fontWeight={'700'}
            style={[styles.text, activeIcon === 'Work' && styles.activeText]}
          />
          {activeIcon === 'Work' && (
            <Image
              source={activeIconImage}
              style={{position: 'absolute', left: -23, top: -16, zIndex: 0}}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleIconPress('Overtime')}>
          <View style={activeIcon === 'Overtime' && styles.activeIconContainer}>
            <WorkingHoursIcon
              width={28}
              height={28}
              color={activeIcon === 'Over Time' ? '#0083B0' : '#FFFFFF'}
            />
          </View>
          <TextShared
            text={'Overtime'}
            color={'#FFFFFF'}
            fontSize={14}
            fontWeight={'700'}
            style={[
              styles.text,
              activeIcon === 'Overtime' && styles.activeText,
            ]}
          />
          {activeIcon === 'Overtime' && (
            <Image
              source={activeIconImage}
              style={{position: 'absolute', left: -23, top: -16, zIndex: 0}}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleIconPress('List')}>
          <View style={activeIcon === 'List' && styles.activeIconContainer}>
            <ListIcon
              width={28}
              height={28}
              color={activeIcon === 'List' ? '#0083B0' : '#FFFFFF'}
            />
          </View>
          <TextShared
            text={'List'}
            color={'#FFFFFF'}
            fontSize={14}
            fontWeight={'700'}
            style={[styles.text, activeIcon === 'List' && styles.activeText]}
          />
          {activeIcon === 'List' && (
            <Image
              source={activeIconImage}
              style={{position: 'absolute', left: -23, top: -16, zIndex: 0}}
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.icon}
          onPress={() => handleIconPress('Apps')}>
          <View style={activeIcon === 'Apps' && styles.activeIconContainer}>
            <OtherIcon
              width={28}
              height={28}
              color={activeIcon === 'Apps' ? '#0083B0' : '#FFFFFF'}
            />
          </View>
          <TextShared
            text={'Apps'}
            color={'#FFFFFF'}
            fontSize={14}
            fontWeight={'700'}
            style={[styles.text, activeIcon === 'Apps' && styles.activeText]}
          />
          {activeIcon === 'Apps' && (
            <Image
              source={activeIconImage}
              style={{position: 'absolute', left: -23, top: -16, zIndex: 0}}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
