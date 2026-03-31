import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CategoryChip({ title, active }) {
  return (
    <TouchableOpacity
      style={[styles.chip, active && styles.activeChip]}
    >
      <Text style={[styles.text, active && styles.activeText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    backgroundColor: "#e5e7eb",
    borderRadius: 20,
    marginRight: 10,
  },
  activeChip: {
    backgroundColor: "#ef4444",
  },
  text: {
    fontSize: 13,
    color: "#374151",
  },
  activeText: {
    color: "#fff",
  },
});