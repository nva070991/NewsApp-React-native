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
import { Ionicons } from '@expo/vector-icons';
import Form from './Form';

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: 'Бизнес',
      anons: 'Сколько НПО зарегистрировано в Казахстане — Новости — Forbes Kazakhstan',
      full: 'Наибольшее количество действующих НПО зафиксировано в Алматы – 5 017, Астане – 3 554, в  Шымкенте – 1 512, Карагандинской – 1 237 и Кызылординской областях – 1217. Для обеспечения открытости и прозрачности деятельности НПО, доступности информации о проектах НПО в 2017 году Министерством культуры и информации введена «База данных НПО». Вместе с тем, рост количества НПО должен перерасти в качественные показатели. Так, только за 2023 год количество НПО возросло минимум на 8,6% в сравнении с предыдущими годами.',
      key: '1',
      img: 'https://static.forbes.kz/img/covers/49b56b53c232b6920faa912f6db034c1-238x307.jpg'
    },
    {
      name: 'Спорт',
      anons: 'Жена Месси получила плохие новости',
      full: 'Супермаркет в Росарио, который принадлежит Антонелле Рокуццо, жене аргентинского нападающего «Интер Майами» Лионеля Месси, подвергся ограблению, передает Sports.kz со ссылкой на Championat.com. По данным Infobae, нападение произошло на автомобиль, который перевозил $ 22,4 тыс. из супермаркета в банк. Два человека вышли из белой машины с тонированными стёклами и разбили одно из окон черного Chevrolet, за рулём которого находилась двоюродная сестра Антонеллы и двое сотрудников супермаркета. Грабители забрали две сумки с деньгами и перед тем, как скрыться расстреляли автомобиль. Сообщается, пострадавшие получили небольшие ушибы и находятся в шоковом состоянии. Отметим, в марте 2023 года супермаркет Месси уже подвергался вооружённому нападению. Тогда злоумышленники 14 раз выстрелили по зданию магазина и оставили надпись, адресованную лично футболисту: «Месси, мы ждём тебя. Явкин — наркоторговец, он тебя не спасёт».',
      key: '2',
      img: 'https://www.sports.kz/upload/2023-11/500_655eb73de71d2.jpg'
    },
    {
      name: 'Политика',
      anons: 'Польский депутат назвал «неподобающим» поведение украинских дальнобойщиков',
      full: 'Перевозчики из Украины демонстрируют неподобающее поведение в очереди на границе с Польшей. Об этом написал польский депутат Витольд Туманович в социальной сети X.',
      key: '3',
      img: 'https://img6.eadaily.com/r650x650/o/55a/db7271c12e1b01d6bad9a74c75dc1.jpeg'
    }
  ]);

  const [modalWindow, setModalWindow] = useState(false);

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString();
      return [article, ...list];
    });
    setModalWindow(false)
  };

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={gStyle.main}>
          <Ionicons
            name="close-circle"
            size={34}
            color="red"
            style={styles.iconClose}
            onPress={() => setModalWindow(false)}
          />
          <Text style={styles.title}>Форма добавления статей</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name="add-circle"
        size={34}
        color="green"
        style={styles.iconAdd}
        onPress={() => setModalWindow(true)}
      />
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
  iconClose: {
    textAlign: 'center'
  },

  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  item: {
    width: '100%',
    marginBottom: 30
  },
  header: { marginBottom: 30 },
  title: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  anons: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  image: {
    height: 300,
    width: '100%'
  }
});
