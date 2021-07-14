import {NavigationContainer} from '@react-navigation/native';
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
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';
import AddTodo from './src/screens/AddTodo';
const Stack = createStackNavigator();
import {default as theme} from './custom-theme'; // <-- Import app theme
import {Provider} from 'react-redux';
import store from './src/store';
import AddCategory from './src/screens/AddCategory';

export default () => (
  <NavigationContainer>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash">
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="AddTodo" component={AddTodo} />
          <Stack.Screen name="AddCategory" component={AddCategory} />
        </Stack.Navigator>
      </Provider>
    </ApplicationProvider>
  </NavigationContainer>
);
