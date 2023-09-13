import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DictionaryScreen from "./DictionaryScreen";
import RecommendScreen from "./RecommendScreen";
import TrainingScreen from "./TrainingScreen";
import ProfileCard from "../components/ProfileCard";
import OpenedBookIcon from "../assets/icons/OpenedBookIcon";
import StarIcon from "../assets/icons/StarIcon";
import EditIcon from "../assets/icons/EditIcon";
import Dictionary from "./Dictionary";

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Dictionary"}
      screenOptions={{
        tabBarActiveTintColor: "rgba(252, 252, 252, 1)",
        tabBarInactiveTintColor: "rgba(252, 252, 252, 0.5)",
        tabBarStyle: {
          height: 84,
          paddingTop: 9,
          alignItems: "center",
          justifyContent: "space-around",
          border: "none",
          backgroundColor: "#85AA9F",
        },
      }}
    >
      <Tab.Screen
        name="Dictionary"
        component={Dictionary}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <OpenedBookIcon stroke={color} />,
        }}
      />
      <Tab.Screen
        name="Recommend"
        component={RecommendScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <StarIcon stroke={color} />,
          headerShown: true,
          title: "Recommend",
          headerStyle: {
            backgroundColor: "#fff",
            height: 121,
          },
          headerShadowVisible: false,
          headerTitle: (props) => <ProfileCard {...props} />,
        }}
      />
      <Tab.Screen
        name="Training"
        component={TrainingScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => <EditIcon stroke={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
