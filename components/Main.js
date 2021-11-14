import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  Modal,
} from "react-native";
import { gStyle } from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import Form from "./Form";

export default function Main({ navigation }) {
  const [news, setNews] = useState([
    {
      name: "Google",
      anons: "Google!!!",
      full: "Google is cool!",
      id: 1,
      img: "https://clck.ru/YoYR8",
    },
    {
      name: "Facebook",
      anons: "Facebook!!!",
      full: "Facebook is cool!",
      id: 2,
      img: "https://clck.ru/YoZ7M",
    },
    {
      name: "Apple",
      anons: "Apple!!!",
      full: "Apple is cool!",
      id: 3,
      img: "https://clck.ru/YoYd4",
    },
  ]);

  const addArticle = (article) => {
    setNews((prev) => {
      article.id = prev.length + 1;
      return [article, ...prev];
    });
    setModalWindow(false);
  };

  const [modalWindow, setModalWindow] = useState(false);
  console.log(news);
  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <Ionicons
          name='close-circle'
          size={34}
          color='black'
          style={styles.closeDialogIcon}
          onPress={() => setModalWindow(false)}
        />
        <View style={gStyle.main}>
          <Text style={styles.title}>Форма добавления статей</Text>
          <Form addArticle={addArticle} />
        </View>
      </Modal>
      <Ionicons
        name='add-circle-sharp'
        size={30}
        color='green'
        style={styles.addNews}
        onPress={() => setModalWindow(true)}
      />
      <Text style={[gStyle.title, styles.header]}>Главная страница</Text>
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.news}
            title='Открыть страницу'
            onPress={() => navigation.navigate("FullInfo", item)}
          >
            <Image style={styles.image} source={{ uri: item.img }} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.full}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  news: {
    margin: 10,
  },
  header: {
    marginBottom: 30,
  },
  item: {
    marginBottom: 30,
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontFamily: "mt-bold",
    textAlign: "center",
    marginTop: 20,
    color: "#474747",
  },
  anons: {
    fontSize: 16,
    fontFamily: "mt-light",
    textAlign: "center",
    marginTop: 5,
    color: "#474747",
  },
  image: {
    width: "100%",
    height: 200,
  },
  addNews: {
    textAlign: "center",
    marginTop: 20,
  },
  closeDialogIcon: {
    marginTop: 40,
    textAlign: "center",
  },
});
