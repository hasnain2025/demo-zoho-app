import {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import back from '../assets/images/auth/back-arrow.png';
import cover from '../assets/images/Vector.jpg';
import TitleCard from '../components/authComponents/TitleCard';
import {FullSizeBtn} from '../components/shared/Button';
import {PrimaryInput} from '../components/shared/Inputs';
import {COLORS, FONTS, SIZES} from '../constants/Theme';

const ForgetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');
  const handlePress = () => {
    Alert.alert('OTP Successfully Send', 'Please check your email to get OPT', [
      {text: 'OK', onPress: () => navigation.navigate('Reset')},
    ]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={cover} resizeMode="cover" style={styles.image}>
        <TitleCard />
        <View style={styles.card}>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <View style={styles.back}>
              <Image source={back} style={styles.backImg} />
            </View>
          </Pressable>
          <Text style={styles.cardTitle}>
            Enter your email to get the password reset link.
          </Text>
          <PrimaryInput
            lable="Your Email"
            placeholder="Enter your email"
            setData={setEmail}
          />
          <FullSizeBtn
            label="Genrate password reset link"
            onPress={handlePress}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.8,
    backgroundColor: '#a9acb2',
    resizeMode: 'stretch',
    width: '100%',
  },
  back: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderColor: COLORS.black,
    borderWidth: 1,
    height: 35,
    width: 35,
    marginTop: 15,
    marginLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  backImg: {
    height: 15,
    width: 15,
  },
  titleContainer: {
    paddingTop: 120,
    padding: 10,
  },
  title: {
    fontSize: SIZES.extraLarge,
    color: COLORS.blue,
    paddingVertical: 15,
    fontFamily: FONTS.extraBold,
  },
  subTitle: {
    fontSize: SIZES.large,
    color: '#4e4f52',
    fontFamily: FONTS.semiBold,
  },
  formContainer: {
    backgroundColor: '#fff',
    height: 450,
    borderColor: 'red',
    border: 1,
    shadowColor: 'black',
    borderRadius: 4,
  },
  card: {
    backgroundColor: COLORS.while,
    margin: 10,
    borderRadius: 4,
    width: '95%',
  },
  cardTitle: {
    fontFamily: FONTS.extraBold,
    fontSize: SIZES.medium,
    color: COLORS.black,
    padding: 16,
  },
});
