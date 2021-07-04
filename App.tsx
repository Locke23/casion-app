import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import RootFlowNavigator from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppLoading from "expo-app-loading";
import { Inter_400Regular, Inter_500Medium } from "@expo-google-fonts/inter";
import { PTSerif_700Bold_Italic, useFonts } from "@expo-google-fonts/pt-serif";
import { Colors } from "./src/config/constants";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    PTSerif_700Bold_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar translucent backgroundColor={Colors.white} />
      <NavigationContainer>
        <RootFlowNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
