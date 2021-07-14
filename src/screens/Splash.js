import {Text, Layout} from '@ui-kitten/components';
import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 1000);
  }, []);
  return (
    <Layout style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/rocket_one.png')}
          resizeMode="contain"
          style={{
            width: '95%',
            transform: [{rotate: '-15deg'}, {translateX: -10}],
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text} category="h1" status="basic">
          Boost your Productivity
        </Text>
      </View>
    </Layout>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  imageContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  text: {
    fontWeight: '900',
    fontSize: 75,
  },
});
