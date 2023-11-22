import { StyleSheet, View, Text, Button } from 'react-native';
import { gStyle } from '../styles/style';
import AppLoading from 'expo-app-loading';

export default function FullInfo({ route }) {
  // const loadScene = () => {
  //   navigation.goBack();
  // };

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text >{route.params.full}</Text>

    </View>
  );
}

const styles = StyleSheet.create({});
