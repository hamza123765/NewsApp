import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import BookmarksScreen from "../screens/BookmarksScreen";
import ProfileScreen from "../screens/ProfileScreen"; 

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: "center",

        // Active tab color
        tabBarActiveTintColor: "#000000",

        // Inactive tab color
        tabBarInactiveTintColor: "#ffffff",

        // text color for header
        headerTintColor: "#fff", 
        headerTitleStyle: { fontWeight: 'bold' },

        
      // BottomTab bar styling

      tabBarStyle: {
       backgroundColor: "#ef4444", // Bottom bar  background color
      borderTopWidth: 1.5,          //bottom bar upper line width
      borderTopColor: "#e0e0e0", // bottom bar upper line's color
    
      // height: 60,                // bottom bar height
      // paddingBottom: 5,          // bottom bar bottom padding 
    },
      }}
    > 

    {/* //navigation options for all screens  */}
    {/* Home Screen */}
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: "News App",  
          headerStyle: { backgroundColor: "#ef4444" },  
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size } />
          ),
        }}
      />

      {/*  Categories Screen */}
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          headerTitle: "Explore Categories",  
          headerStyle: { backgroundColor: "#ef4444" },  
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid" color={color} size={size} />
          ),
        }}
      />

        {/* Bookmarks Screen */}
      <Tab.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          headerTitle: "Saved Articles", 
          headerStyle: { backgroundColor: "#ef4444" },  
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark" color={color} size={size} />
          ),
        }}
      />

        {/* Profile Screen */}
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: "My Profile", 
          headerStyle: { backgroundColor: "#ef4444" }, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}




// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { Ionicons } from "@expo/vector-icons";

// import HomeScreen from "../screens/HomeScreen";
// import CategoriesScreen from "../screens/CategoriesScreen";
// import BookmarksScreen from "../screens/BookmarksScreen";
// import ProfileScreen from "../screens/ProfileScreen"; 

// const Tab = createBottomTabNavigator();

// export default function BottomTabs() {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         headerTitleAlign: "center",
//         tabBarActiveTintColor: "#c10b0b",
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" color={color} size={size} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Categories"
//         component={CategoriesScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="grid" color={color} size={size} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Bookmarks"
//         component={BookmarksScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="bookmark" color={color} size={size} />
//           ),
//         }}
//       />

//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="person" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }