import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ErrorCard = () => {
  return (
    <>
      <View style={styles.errorContainer}>
        <View>
          <Image
            source={require('./assets/img/error2.png')}
            style={styles.img}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.errorHead}>Connection Error</Text>
          <Text style={styles.subText}>
            Please check your network connectivity and try again
          </Text>
        </View>
      </View>
    </>
  );
};

export default ErrorCard;

const styles = StyleSheet.create({
  rootView: {
    flex: 1,
    flexDirection: 'column',
  },
  errorContainer: {
    flex: 1,
    alignSelf: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    justifyContent: 'center',
  },
  rootContainer: {justifyContent: 'flex-start', padding: 10},
  img: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {marginBottom: 10, fontSize: 20, fontWeight: 'bold'},
  errorHead: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    fontWeight: '500',
    paddingHorizontal: 50,
    textAlign: 'center',
  },
});
