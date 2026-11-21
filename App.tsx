import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context"; // TODO BT10.1a: import SafeAreaProvider từ "react-native-safe-area-context"
import { NavigationContainer } from "@react-navigation/native"; // TODO BT10.7c: import NavigationContainer từ "@react-navigation/native" và RootNavigator từ "./navigation"
import { RootNavigator } from "./navigation";
import { Provider } from "react-redux"; // TODO BT10.8c: import Provider từ "react-redux" và store từ "./store"
import { store } from "./store";

export default function App() {
  // TODO BT10.1a: bọc ứng dụng trong <SafeAreaProvider>
  // TODO BT10.7c: thay HomeScreen bằng <NavigationContainer><RootNavigator /></NavigationContainer>
  // TODO BT10.8c: bọc thêm <Provider store={store}> ở ngoài cùng
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}