 import React from "react";
import { SafeAreaView, FlatList, StyleSheet } from "react-native";
import { useBookmarks } from "../context/BookmarkContext";
import LatestNewsItem from "../components/LatestNewsItem";
import EmptyState from "../components/EmptyState";

export default function BookmarkScreen() {
  const { bookmarks } = useBookmarks();

  return (
    <SafeAreaView style={styles.container}>
      {bookmarks.length === 0 ? (
        <EmptyState
          icon="bookmark"
          title="No bookmarks yet"
          subtitle="Save news articles to read them later"
        />
      ) : (
        <FlatList
          data={bookmarks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <LatestNewsItem item={item} />}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 15,
  },
});
 