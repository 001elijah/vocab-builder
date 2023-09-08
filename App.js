import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import DictionaryScreen from "./screens/DictionaryScreen";
import ProfileCard from "./components/ProfileCard";

const Stack = createStackNavigator();

const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="RegistrationScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false, title: "Login screen" }}
      />
      <Stack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{ headerShown: false, title: "Registration screen" }}
      />
    </Stack.Navigator>
  );
};

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DictionaryScreen">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DictionaryScreen"
          component={DictionaryScreen}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: "#fff",
              height: 121,
            },
            headerShadowVisible: false,
            headerTitle: (props) => <ProfileCard {...props} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
