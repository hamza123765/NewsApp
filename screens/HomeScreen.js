import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native"; 

import SearchBar from "../components/SearchBar";
import CategoryChip from "../components/CategoryChip";
import BreakingNewsCard from "../components/BreakingNewsCard";
import LatestNewsItem from "../components/LatestNewsItem";
import { useNavigation } from "@react-navigation/native";//nnnnnn

import { breakingNewsData } from "../data/breakingNewsData";
import { newsData } from "../data/newsData";
import { trendingCategories } from "../data/trendingCategories";

export default function HomeScreen() {
  const [activeIndex, setActiveIndex] = useState(0);
  const breakingRef = useRef(null);
  const navigation = useNavigation();//hhhhh
  const onBreakingScroll = (event) => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const index = Math.round(
      event.nativeEvent.contentOffset.x / slideWidth
    );
    setActiveIndex(index);
  };

  return (
     
    <SafeAreaView style={styles.safe}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Search */}
        <SearchBar />

        {/* Breaking News */}
        <Text style={styles.sectionTitle}>Breaking News</Text>
        <FlatList
          ref={breakingRef}
          data={breakingNewsData}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <BreakingNewsCard item={item} />
          )}
          onScroll={onBreakingScroll}
          scrollEventThrottle={16}
        />

        {/* Dot Indicators */}
        <View style={styles.dotsContainer}>
          {breakingNewsData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index && styles.activeDot,
              ]}
            />
          ))}
        </View>

        {/* Trending Categories */}
        <Text style={styles.sectionTitle}>
          Trending Right Now
        </Text>
        <FlatList
          data={trendingCategories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <CategoryChip
              title={item.title}
              active={index === 0}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        {/* Latest News */}
        <Text style={styles.sectionTitle}>Latest News</Text>
        {newsData.map((item) => (
          <LatestNewsItem key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  container: {
    paddingHorizontal: 15,
    paddingBottom: 30,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 15,
    marginBottom: 10,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#cfc0c0",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#dd4040",
    width: 10,
  },
});



// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   ScrollView,
//   FlatList,
// } from "react-native";

// import SearchBar from "../components/SearchBar";
// import CategoryChip from "../components/CategoryChip";
// import BreakingNewsCard from "../components/BreakingNewsCard";
// import LatestNewsItem from "../components/LatestNewsItem";

// import { breakingNewsData } from "../data/breakingNewsData";
// import { newsData } from "../data/newsData";
// import { trendingCategories } from "../data/trendingCategories";

// export default function HomeScreen() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const breakingRef = useRef(null);

//   const onBreakingScroll = (event) => {
//     const slideWidth = event.nativeEvent.layoutMeasurement.width;
//     const index = Math.round(
//       event.nativeEvent.contentOffset.x / slideWidth
//     );
//     setActiveIndex(index);
//   };

//   return (
//     <SafeAreaView style={styles.safe}>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.container}
//       >
//         {/* Search */}
//         <SearchBar />

//         {/* Breaking News */}
//         <Text style={styles.sectionTitle}>Breaking News</Text>
//         <FlatList
//           ref={breakingRef}
//           data={breakingNewsData}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => <BreakingNewsCard item={item} />}
//           onScroll={onBreakingScroll}
//           scrollEventThrottle={16}
//         />

//         {/* Dot Indicators */}
//         <View style={styles.dotsContainer}>
//           {breakingNewsData.map((_, index) => (
//             <View
//               key={index}
//               style={[
//                 styles.dot,
//                 activeIndex === index && styles.activeDot,
//               ]}
//             />
//           ))}
//         </View>

//         {/* Trending Categories */}
//         <Text style={styles.sectionTitle}>Trending Right Now</Text>
//         <FlatList
//           data={trendingCategories}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item, index }) => (
//             <CategoryChip title={item.title} active={index === 0} />
//           )}
//           contentContainerStyle={{ paddingBottom: 20 }}
//         />

//         {/* Latest News */}
//         <Text style={styles.sectionTitle}>Latest News</Text>
//         {newsData.map((item) => (
//           <LatestNewsItem key={item.id} item={item} />
//         ))}
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   safe: {
//     flex: 1,
//     backgroundColor: "#ffffff",
//   },
//   container: {
//     paddingHorizontal: 15,
//     paddingBottom: 30,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "700",
//     marginTop: 15,
//     marginBottom: 10,
//   },
//   dotsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   dot: {
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//     backgroundColor: "#cfc0c0",
//     marginHorizontal: 4,
//   },
//   activeDot: {
//     backgroundColor: "#dd4040",
//     width: 10,
//   },
// });












































// import LatestNewsItem from "../components/LatestNewsItem";
// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   SafeAreaView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// import { breakingNewsData } from "../data/breakingNewsData";
// import { newsData } from "../data/newsData";

// import BreakingNewsCard from "../components/BreakingNewsCard";
// import NewsCard from "../components/NewsCard";

// export default function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>NewsApp</Text>
//         <Ionicons name="search" size={22} color="#000" />
//       </View>

//       {/* Breaking News */}
//       <Text style={styles.sectionTitle}>Breaking News</Text>
//       <FlatList
//         data={breakingNewsData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <BreakingNewsCard item={item} />}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//       />

//       {/* Latest News */}
//       <Text style={styles.sectionTitle}>Latest News</Text>
//       <FlatList
//   data={newsData}
//   keyExtractor={(item) => item.id}
//   renderItem={({ item }) => <LatestNewsItem item={item} />}
//   showsVerticalScrollIndicator={false}
// />
//       {/* <FlatList
//         // data={newsData}
//         // keyExtractor={(item) => item.id}
//         // renderItem={({ item }) => <NewsCard item={item} />}
//         // showsVerticalScrollIndicator={false}
//       /> */}
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//     paddingHorizontal: 15,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 15,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginVertical: 10,
//   },
// });




// plain screen code


// import { View, Text, StyleSheet } from "react-native";

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, justifyContent: "center", alignItems: "center" },
//   text: { fontSize: 22, fontWeight: "bold" },
// });




// home with card



// import {
//   View,
//   Text,
//   StyleSheet,
//   FlatList,
//   SafeAreaView,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";

// import NewsCard from "../components/NewsCard";
// import { newsData } from "../data/newsData";

// export default function HomeScreen() {
//   return (
//     <SafeAreaView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerTitle}>NewsApp</Text>
//         <Ionicons name="search" size={22} color="#000" />
//       </View>

//       {/* Latest News */}
//       <Text style={styles.sectionTitle}>Latest News</Text>

//       <FlatList
//         data={newsData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <NewsCard item={item} />}
//         showsVerticalScrollIndicator={false}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f3f4f6",
//     paddingHorizontal: 15,
//   },
//   header: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     paddingVertical: 15,
//   },
//   headerTitle: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "600",
//     marginVertical: 10,
//   },
// });