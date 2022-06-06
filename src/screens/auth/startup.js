/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const bg_blue = require('../../assets/auth/bg_blue.png');

export const startupScreen = () => {
  return (
    <ImageBackground style={styles.background} source={bg_blue}>
      <View style={styles.ftop}>
        <Image
          style={styles.default}
          source={require('../../assets/auth/ftop.png')}
        />
        <Image
          style={styles.star1}
          source={require('../../assets/auth/Star3.png')}
        />
        <Image
          style={styles.star2}
          source={require('../../assets/auth/Star2.png')}
        />
        <Text>Привет</Text>
      </View>
      <View style={styles.center}>
        <Image
          style={styles.default}
          source={require('../../assets/auth/U_Mom_1.png')}
        />
      </View>
      <TouchableOpacity>
        <LinearGradient colors={['#FFE6AF', '#FFE6AF']} style={styles.btn}>
          <Text style={styles.btnTXT}>Создать аккаунт</Text>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, {marginTop: 20}]}>
        <Text style={[styles.btnTXT, {color: '#FFF5DC'}]}>
          У меня уже есть аккаунт
        </Text>
      </TouchableOpacity>
      <View style={styles.bottom}>
        <Image
          style={styles.bottomimg}
          source={require('../../assets/auth/fbot.png')}
        />
        <Image
          style={styles.star3}
          source={require('../../assets/auth/Star1.png')}
        />
        <Image
          style={styles.star4}
          source={require('../../assets/auth/Star3.png')}
        />
      </View>
    </ImageBackground>
  );
};
