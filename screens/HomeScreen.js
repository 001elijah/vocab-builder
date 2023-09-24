import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import RecommendScreen from "./RecommendScreen";
import TrainingScreen from "./TrainingScreen";
import ProfileCard from "../components/ProfileCard";
import OpenedBookIcon from "../assets/icons/OpenedBookIcon";
import StarIcon from "../assets/icons/StarIcon";
import EditIcon from "../assets/icons/EditIcon";
import Dictionary from "./Dictionary";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories, selectStatistics } from "../redux/words/wordsSelectors";
import { getCategories, getUserStatistics } from "../redux/words/wordsOperations";
import { selectAuthorized } from "../redux/auth/authSelectors";

const Tab = createBottomTabNavigator();

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const statistics = useSelector(selectStatistics)
  const isAuthorized = useSelector(selectAuthorized);

  useEffect(() => {
    if (!categories) {
      dispatch(getCategories());
    }
    if (!statistics) {
      dispatch(getUserStatistics());
    }
  }, []);

  useEffect(() => {
    !isAuthorized && navigation.replace("Auth");
  }, [isAuthorized]);
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
          tabBarIcon: ({ color }) => <StarIcon stroke={color} />,
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
          tabBarIcon: ({ color }) => <EditIcon stroke={color} />,
          title: "Training",
          headerStyle: {
            backgroundColor: "#fff",
            height: 121,
          },
          headerShadowVisible: false,
          headerTitle: (props) => <ProfileCard {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
