import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import {z} from 'zod';
import Checkbox from '@react-native-community/checkbox';
import PrimaryButton from '../PrimaryButton/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

import styles from './style';
import imageSrc from '../../assets/Images/titleImage.png';
import bgImage from '../../assets/Images/loginBg.png';
import eyeIcon from '../../assets/Images/eyeIcon.png';
import faceIcon from '../../assets/Images/fingerPrintIcon.png';

// Define validation schema
const loginSchema = z.object({
  username: z
    .string()
    .max(30, 'Maximum length is 30 characters'),
  password: z
    .string()
    .max(30, 'Maximum length is 30 characters'),
});

export default function Login() {
  const navigation = useNavigation();
  const [isSecure, setisSecure] = useState(true);
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [isChecked, setisChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    try {
      loginSchema.parse({username, password});
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors = {};
        error.errors.forEach(err => {
          newErrors[err.path[0]] = err.message;
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleLogin = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // Fake API call
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        },
      );

      if (!response.ok) {
        throw new Error('فشل تسجيل الدخول');
      }

      // If successful, navigate to new page
      navigation.navigate('NewPage');
    } catch (error) {
      Alert.alert('خطأ', error.message || 'حدث خطأ أثناء تسجيل الدخول');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ImageBackground
      style={styles.gradientContainer}
      source={bgImage}
      resizeMode={'cover'}>
      <View style={[styles.Container, {direction: 'rtl'}]}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={imageSrc} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text1}>متابعة تسجيل الدخول</Text>
          <Text style={styles.text2}>الخاص بك</Text>
        </View>
        <View style={styles.inputsContainer}>
          {/* username */}
          <Text style={styles.inputLabel}>إسم المستخدم</Text>
          <TextInput
            placeholder={'أدخل إسم المستخدم'}
            style={[
              styles.usernameInput,
              {textAlign: 'right'},
              errors.username && styles.inputError,
            ]}
            placeholderTextColor={'#8F90A6'}
            value={username}
            onChangeText={text => {
              setusername(text);
              if (errors.username) {
                validateForm();
              }
            }}
          />
          {errors.username && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errors.username}</Text>
            </View>
          )}

          {/* Password */}
          <Text style={styles.inputLabel}>كلمة المرور</Text>
          <TextInput
            placeholder={'أدخل كلمة المرور'}
            placeholderTextColor={'#8F90A6'}
            secureTextEntry={isSecure}
            style={[
              styles.passwordInput,
              {textAlign: 'right'},
              errors.password && styles.inputError,
            ]}
            value={password}
            maxLength={30}
            onChangeText={text => {
              setpassword(text);
              if (errors.password) {
                validateForm();
              }
            }}
          />
          {errors.password && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{errors.password}</Text>
            </View>
          )}
          {/* eye icon */}
          <TouchableOpacity
            style={[styles.eyeIcon, errors.password ? {bottom: 6} : {}]}
            onPress={() => setisSecure(!isSecure)}>
            <Image source={eyeIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            value={isChecked}
            onValueChange={value => setisChecked(value)}
            style={styles.checkbox}
          />
          <Text style={styles.checkboxText}>تذكرني</Text>
        </View>
        <View style={styles.loginbtnContainer}>
          <PrimaryButton
            text={isLoading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
            onPress={handleLogin}
            disabled={isLoading}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.faceIconContainer}>
            <Image style={styles.faceIcon} source={faceIcon} />
            <Text style={styles.faceIconText}>استخدم Face ID</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.languageIconContainer}>
          <TouchableOpacity>
            <Text style={styles.languageIconText}>English</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
