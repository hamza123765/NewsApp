import { View, Text, Image, StyleSheet } from "react-native";

export default function BreakingNewsCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,              // 🔥 big like image
    height: 170,
    borderRadius: 18,
    overflow: "hidden",
    marginRight: 14,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    padding: 12,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.45)",
  },
  title: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
});


// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
// } from "react-native";

// export default function BreakingNewsCard({ item, onPress }) {
//   return (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={onPress}
//       activeOpacity={0.85}
//     >
//       <Image source={{ uri: item.image }} style={styles.image} />
//       <View style={styles.overlay}>
//         <Text style={styles.title} numberOfLines={2}>
//           {item.title}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     width: 300,
//     height: 180,
//     borderRadius: 15,
//     overflow: "hidden",
//     marginRight: 15,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   overlay: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     padding: 10,
//     backgroundColor: "rgba(0,0,0,0.55)",
//   },
//   title: {
//     color: "#fff",
//     fontSize: 15,
//     fontWeight: "700",
//   },
// });