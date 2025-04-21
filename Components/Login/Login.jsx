import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
// import Checkbox from '@react-native-community/checkbox';
import CustomCheckbox from '../CheckBox/CheckBox';

import PrimaryButton from '../PrimaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import axios from 'axios';

import styles from './style';
import imageSrc from '../../assets/Images/titleImage.png';
import bgImage from '../../assets/Images/loginBg.png';
import eyeIcon from '../../assets/Images/eyeIcon.png';
import faceIcon from '../../assets/Images/fingerPrintIcon.png';
import TextShared from '../TextShared/TextShared';
import {changeLanguage} from '../../src/languages/i18n';

export default function Login() {
  const navigation = useNavigation();
  const {t, i18n} = useTranslation();
  const [isSecure, setisSecure] = useState(true);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isChecked, setisChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLanguageToggle = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    changeLanguage(newLang);
  };

  const handleLogin = async () => {
    // Check if fields are not empty and max length is respected
    if (!username || !password) {
      ToastAndroid.show(t('validation.requiredFields'), ToastAndroid.SHORT);
      return;
    }

    if (username.length > 50 || password.length > 50) {
      ToastAndroid.show(t('validation.maxLength'), ToastAndroid.SHORT);
      return;
    }

    setIsLoading(true);
    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.status >= 200 && response.status < 300) {
        navigation.navigate('NewPage');
      } else {
        ToastAndroid.show(t('errors.loginFailed'), ToastAndroid.SHORT);
      }
    } catch (error) {
      if (error.response) {
        // handle error from backend
        ToastAndroid.show(
          error.response.data?.message || t('errors.loginFailed'),
          ToastAndroid.SHORT,
        );
      } else {
        // handle error from connection
        ToastAndroid.show(t('errors.somethingWentWrong'), ToastAndroid.SHORT);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      style={styles.imageBackgroundContainer}
      source={bgImage}
      resizeMode={'cover'}>
      <View style={styles.Container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSrc} />
        </View>

        <View style={styles.textContainer}>
          <TextShared
            text="login.title"
            color="#0083B0"
            fontWeight="400"
            fontSize={32}
          />
          <TextShared
            text="login.subtitle"
            color="#196F9B"
            fontWeight="700"
            fontSize={24}
          />
        </View>

        <View style={styles.inputsContainer}>
          <TextShared
            text="login.username"
            color="#0083B0"
            fontWeight="700"
            fontSize={13}
          />
          <TextInput
            placeholder={t('login.usernamePlaceholder')}
            style={styles.usernameInput}
            placeholderTextColor={'#8F90A6'}
            value={username}
            onChangeText={setusername}
            maxLength={50}
          />

          <TextShared
            text="login.password"
            color="#0083B0"
            fontWeight="700"
            fontSize={13}
          />
          {/* password container */}
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder={t('login.passwordPlaceholder')}
              placeholderTextColor="#8F90A6"
              secureTextEntry={isSecure}
              style={[
                styles.passwordInput,
                {textAlign: i18n.language === 'ar' ? 'right' : 'left'},
              ]}
              value={password}
              maxLength={50}
              onChangeText={setpassword}
            />

            <TouchableOpacity
              style={[styles.eyeIcon]}
              onPress={() => setisSecure(!isSecure)}>
              <Image source={eyeIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            style={styles.checkboxContainer}
            activeOpacity={0.8}
            onPress={() => setisChecked(prev => !prev)}>
            <CustomCheckbox
              value={isChecked}
              onValueChange={setisChecked}
              style={styles.checkbox}
            />
            <TextShared
              text="login.rememberMe"
              fontSize={15}
              color="#000000"
              fontWeight="400"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.loginbtnContainer}>
          <PrimaryButton
            text={isLoading ? t('login.loggingIn') : t('login.loginButton')}
            onPress={handleLogin}
            disabled={isLoading}
          />
        </View>

        <View>
          {/* biometrics button */}
          <TouchableOpacity style={styles.faceIconContainer}>
            <Image style={styles.faceIcon} source={faceIcon} />
            <TextShared
              text="login.useFaceId"
              fontSize={16}
              color="#196F9B"
              fontWeight="400"
            />
          </TouchableOpacity>
        </View>
        {/* language button */}
        <View style={styles.languageIconContainer}>
          <TouchableOpacity onPress={handleLanguageToggle}>
            <TextShared
              text="login.language"
              fontSize={14}
              color="#000"
              fontWeight="400"
            />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
