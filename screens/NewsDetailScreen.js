import React from "react";  
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useBookmarks } from "../context/BookmarkContext";

export default function NewsDetailScreen({ route }) {
  const { item } = route.params;
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const bookmarked = isBookmarked(item.id);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.title}>{item.title}</Text>

          <View style={styles.meta}>
            <Text style={styles.source}>{item.source || "News App"}</Text>
            <Feather
              name={bookmarked ? "bookmark" : "bookmark"}
              size={22}
              color={bookmarked ? "#000" : "#999"}
              onPress={() =>
                bookmarked
                  ? removeBookmark(item.id)
                  : addBookmark(item)
              }
            />
          </View>

          <Text style={styles.desc}>
            {item.description}
            {"\n\n"}
            {item.content ||
              "This is a demo news detail screen. API based content will be loaded here in future."}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  source: {
    fontSize: 13,
    color: "#777",
  },
  desc: {
    fontSize: 15,
    lineHeight: 22,
    color: "#333",
  },
});