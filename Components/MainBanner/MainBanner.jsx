import { View, Image } from 'react-native';
import defaultImage from '../../assets/Images/bannerImage.png';
import TextShared from '../TextShared/TextShared';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';



export default function MainBanner({
  title,
  description,
  imageSrc = defaultImage,
}) {

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={imageSrc} style={styles.image} />
          <LinearGradient
            colors={['rgba(217, 217, 217, 0)', 'rgba(0, 0, 0, 0.25)', 'rgba(0, 0, 0, 1)']}
            style={styles.gradient}
          />
          <View style={styles.textContainer}>
            <TextShared
              fontSize={15}
              color="#fff"
              fontWeight={'700'}
              text={title}
            />
            <View style={styles.descriptionContainer}>
              <TextShared
                fontSize={13}
                color="#fff"
                fontWeight={'400'}
                text={description}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
