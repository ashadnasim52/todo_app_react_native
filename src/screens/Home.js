import React from 'react';
import {StyleSheet} from 'react-native';
import {
  ApplicationProvider,
  Button,
  Icon,
  IconRegistry,
  Layout,
  Text,
} from '@ui-kitten/components';
const HeartIcon = props => <Icon {...props} name="heart" />;

const Home = () => {
  return (
    <Layout style={styles.container}>
      <Text style={styles.text} category="h1">
        Welcome to UI Kitten 😻
      </Text>
      <Text style={styles.text} category="s1">
        Start with editing App.js to configure your App
      </Text>
      <Text style={styles.text} appearance="hint">
        For example, try changing theme to Dark by using eva.dark
      </Text>
      <Button style={styles.likeButton} accessoryLeft={HeartIcon}>
        LIKE
      </Button>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});
