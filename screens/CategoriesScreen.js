 import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
} from "react-native";

import CategoryCard from "../components/CategoryCard";
import { categoriesData } from "../data/categoriesData";

export default function CategoriesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>Categories</Text>

      {/* Grid */}
      <FlatList
        data={categoriesData}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <CategoryCard item={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6",
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 15,
  },
});