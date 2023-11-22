import { StyleSheet, View, Text, TouchableOpacity, FlatList } from "react-native";
import { gStyle } from "../styles/style";
import AppLoading from "expo-app-loading";
import { useState } from 'react';



export default function Main({navigation}) {



  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Google!!!',
      full: 'Google is cool'
    },
    {
      name: 'Apple',
      anons: 'Apple!!!',
      full: 'Apple is cool'
    },
    {
      name: 'FaceBook',
      anons: 'FaceBook!!!',
      full: 'FaceBook is cool'
    }
  ])

 
    return (
      <View style={gStyle.main}>
        <Text style={gStyle.title}>Главная страница</Text>
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity onPress={()=> navigation.navigate('FullInfo', item)}>
            <Text>
              {item.name}
            </Text>
            <Text>
              {item.anons}
            </Text>
          </TouchableOpacity>
        )}/>
      </View>
    );
 
}

const styles = StyleSheet.create({

});
