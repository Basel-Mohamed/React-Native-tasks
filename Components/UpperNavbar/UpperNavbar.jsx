import React from 'react';
import {View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import navbarBg from '../../assets/Images/navbarBg.png';
import styles from './style';
import ProfileIcon from '../../assets/Images/profileIcon.png';
import NotificationIcon from '../../assets/Images/notifications.svg';
import TextShared from '../TextShared/TextShared';
export default function UpperNavbar({
  userName = 'Username',
  userTitle = 'User title',
  userProfileIcon = ProfileIcon,
}) {
  return (
    <ImageBackground
      source={navbarBg}
      style={styles.imageBackground}
      resizeMode={'cover'}>
      <View style={styles.container}>
        {/* left Sec */}
        <View style={styles.leftSection}>
          <View style={styles.profileInfo}>
            <TouchableOpacity>
              <Image source={userProfileIcon} style={styles.profileIcon} />
            </TouchableOpacity>
            <View>
              <TextShared
                color={'white'}
                fontSize={16}
                fontWeight={'500'}
                text={userName}
              />
              <TextShared
                color={'#E1E1E1'}
                fontSize={12}
                fontWeight={'400'}
                text={userTitle}
              />
            </View>
          </View>
        </View>
        {/* right sec */}
        <View style={styles.rightSection}>
          <View style={styles.notificationContainer}>
            <TouchableOpacity style={styles.notificationArea}>
              <NotificationIcon width={25} height={25} />
            </TouchableOpacity>
            <View style={styles.notificationDot} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
