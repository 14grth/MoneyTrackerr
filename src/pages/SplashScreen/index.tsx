import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import Frame from '../../assets/icon/Frame.svg';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout (() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Frame />
      <Text style={styles.text}>Money Tracker</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02CF8E',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
      fontSize: 32,
      fontFamily: 'Poppins-Medium',
    },
});