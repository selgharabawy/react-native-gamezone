import React, { useState } from "react";
import * as Font from 'expo-font';
import { AppLoading } from 'expo-app-loading';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded ] = useState(true);

  const loadFontsAsync = async () => {
    await getFonts();
    setFontsLoaded(true);
  };

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={loadFontsAsync}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return (
    <Navigator />
  );

}