import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../Shared/header';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
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
          name="Home"
          component={Home}
          options={({navigation})=> {
            return {
                headerTitle: () => <Header navigation={navigation} title='Game Zone'/>,
              }
          }}
        />
        <Stack.Screen
          name="ReviewDetails"
          component={ReviewDetails}
          options={{
            title: 'Review Details',
            // headerStyle: { backgroundColor: '#333' }
          }}
        />
      </Stack.Navigator>
  );
};

export default HomeStack;
