
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabs from "./BottomTabs";
import NewsDetailScreen from "../screens/NewsDetailScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetailScreen}
        options={{ 
          title: "News Detail",
          //  Bar Color Styling Starts Here 
          headerStyle: { 
            backgroundColor: "#dd4040",  // header background color
          }, 
          headerTintColor: "#fff",      // text color for header
          headerTitleAlign: "center",
          headerTitleStyle: { fontWeight: "bold" },
          //  Bar Color Styling Ends Here 
        }}
      />
    </Stack.Navigator>
  );
  
}









 