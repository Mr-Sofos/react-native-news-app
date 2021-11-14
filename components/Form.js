import React from "react";
import { StyleSheet, Button, View, TextInput } from "react-native";
import { Formik } from "formik";

export default function Form({ addArticle }) {
  return (
    <View>
      <Formik
        initialValues={{ name: "", anons: "", full: "", img: "" }}
        onSubmit={(values) => addArticle(values)}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder='Введите название статьи'
              onChangeText={props.handleChange("name")}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder='Введите анонс'
              onChangeText={props.handleChange("anons")}
            />
            <TextInput
              style={styles.input}
              multiline
              value={props.values.full}
              placeholder='Введите текст статьи'
              onChangeText={props.handleChange("full")}
            />
            <TextInput // https://clck.ru/YpS2z
              style={styles.input}
              value={props.values.img}
              placeholder='Введите ссылку на картинку'
              onChangeText={props.handleChange("img")}
            />
            <Button title='Добавить статью' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    padding: 5,
    margin: 10,
    fontSize: 20,
    borderColor: "#677878",
  },
});
