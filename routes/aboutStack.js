import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import About from '../screens/about';
import Header from '../Shared/header';

const Stack = createNativeStackNavigator();

const AboutStack = () => {
  return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#444',
          headerStyle: {
            backgroundColor: '#eee',
            height: 90,
          },
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={({navigation})=> {
            return {
                headerTitle: () => <Header navigation={navigation} title='About'/>,
              }
          }}
        />
      </Stack.Navigator>
  );
};

export default AboutStack;
