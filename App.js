import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";
import { useState } from "react";
import AppLoading from "expo-app-loading";
import Main from './components/Main'

const fonts = () =>
  Font.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "mt-light": require("./assets/fonts/Montserrat-Light.ttf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return (
   <Main/>

    );
  } else {
    return ( 
      <AppLoading
        startAsync={fonts}
        onFinish={() =>setFont(true)}
        onError={console.warn}
      />
    );
  }
}

const styles = StyleSheet.create({});
