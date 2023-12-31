import { StyleSheet, View, Button, TextInput } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: '', anons: '', full: '', img: '' }}
        onSubmit={(values, action) => {
          addArticle(values);
          action.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder="Введите название"
              onChangeText={props.handleChange('name')}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder="Введите анонс"
              onChangeText={props.handleChange('anons')}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder="Введите статью"
              onChangeText={props.handleChange('full')}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder="Укажите ссылку на фото"
              onChangeText={props.handleChange('img')}
            />
            <Button
              style={styles.button}
              title="Добавить"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderColor: 'silver',
    borderRadius: 5,
    marginBottom: 10
  }
});
