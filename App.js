 

import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./navigation/StackNavigator";
import { BookmarkProvider } from "./context/BookmarkContext";

export default function App() {
  return (
    <BookmarkProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </BookmarkProvider>
  );
}








// import { NavigationContainer } from "@react-navigation/native";
// import { BookmarkProvider } from "./context/BookmarkContext";
// import BottomTabs from "./navigation/BottomTabs";

// export default function App() {
//   return (
//     <BookmarkProvider>
//       <NavigationContainer>
//         <BottomTabs />
//       </NavigationContainer>
//     </BookmarkProvider>
//   );
// }

