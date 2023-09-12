import React from "react";
import DictionaryScreen from "./DictionaryScreen";
import AddWordScreen from "./AddWordScreen";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileCard from "../components/ProfileCard";

const Stack = createStackNavigator();

const Dictionary = () => {
  return (
    <Stack.Navigator initialRouteName="DictionaryScreen">
      <Stack.Screen
        name="DictionaryScreen"
        component={DictionaryScreen}
        options={{
          headerShown: true,
          title: "Dictionary",
          headerStyle: {
            backgroundColor: "#fff",
            height: 121,
          },
          headerShadowVisible: false,
          headerTitle: (props) => <ProfileCard {...props} />,
        }}
      />
      <Stack.Screen
        name="AddWordScreen"
        component={AddWordScreen}
        options={{
          headerShown: true,
          title: "Add word screen",
          headerStyle: {
            backgroundColor: "#fff",
            height: 121,
          },
          headerShadowVisible: false,
          headerTitle: (props) => <ProfileCard {...props} />,
        }}
      />
    </Stack.Navigator>
  );
};

export default Dictionary;
