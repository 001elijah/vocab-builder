import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import TrainingProgressCircle from "../components/TrainingProgressCircle";

const TrainingScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => null,
    });
  });

  return (
    <View className="px-4 justify-start h-full bg-light">
      <TrainingProgressCircle progress={18} total={20} />
    </View>
  );
};

export default TrainingScreen;
