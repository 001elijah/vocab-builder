import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    "FixelDisplay-Regular": require("./assets/fonts/FixelDisplay-Regular.ttf"),
    "FixelDisplay-Medium": require("./assets/fonts/FixelDisplay-Medium.ttf"),
    "FixelDisplay-SemiBold": require("./assets/fonts/FixelDisplay-SemiBold.ttf"),
    "FixelDisplay-Bold": require("./assets/fonts/FixelDisplay-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-orange-700 font-['FixelDisplay-Bold']">
        Open up App.js to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
