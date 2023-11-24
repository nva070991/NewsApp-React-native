import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Modal
} from 'react-native';
import { gStyle } from '../styles/style';
import { useState } from 'react';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Google!!!',
      full: 'Google is cool',
      key: '1',
      img: 'https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg'
    },
    {
      name: 'Apple',
      anons: 'Apple!!!',
      full: 'Apple is cool',
      key: '2',
      img: 'https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg'
    },
    {
      name: 'FaceBook',
      anons: 'FaceBook!!!',
      full: 'FaceBook is cool',
      key: '3',
      img: 'https://bipbap.ru/wp-content/uploads/2017/04/000f_7290754.jpg'
    }
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <FlatList
        style={styles.item}
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('FullInfo', item)}
          >
            <Image
              source={{
                uri: item.img
              }}
              style={styles.image}
            />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    marginBottom: 30
  },
  header: { marginBottom: 30 },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  image: {
    width: '100%',
    height: 300
  }
});
