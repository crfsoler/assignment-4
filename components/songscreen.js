import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { WebView } from "react-native-webview";

export function SongDetails({ route }) {

  const songDetails = route.params.songInfo;
  return (
    <WebView
      source={{ uri: songDetails }}
      style={{
        backgroundColor: Themes.colors.background,
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
}
