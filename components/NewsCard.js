import { View, Text, Image, StyleSheet } from "react-native";

export default function NewsCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.source}>{item.source}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    height: 180,
    width: "100%",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  source: {
    color: "#6b7280",
    fontSize: 13,
  },
});