import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CategoryCard({ item }) {
  return (
    <TouchableOpacity style={styles.card}>
      <Ionicons name={item.icon} size={32} color="#2563eb" />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 8,
    paddingVertical: 25,
    borderRadius: 14,
    alignItems: "center",
    elevation: 3,
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600",
  },
});