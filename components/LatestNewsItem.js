import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useBookmarks } from "../context/BookmarkContext";

export default function LatestNewsItem({ item }) {
  const navigation = useNavigation();
  const { addBookmark, removeBookmark, isBookmarked } = useBookmarks();

  const bookmarked = isBookmarked(item.id);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("NewsDetail", { item })
      }
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <Text style={styles.desc} numberOfLines={2}>
          {item.description}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() =>
          bookmarked
            ? removeBookmark(item.id)
            : addBookmark(item)
        }
      >
        <Feather
          name="bookmark"
          size={22}
          color={bookmarked ? "#000" : "#999"}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

/* 🔥 STYLES — THIS WAS MISSING */
const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  desc: {
    fontSize: 13,
    color: "#666",
    marginTop: 4,
  },
});