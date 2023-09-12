import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import GoBackButton from "../components/GoBackButton";

const AddWordScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    const handleGoBack = () => {
      navigation.goBack();
    };
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => <GoBackButton goBackFunction={handleGoBack} />,
    });
  });
  return (
    <View>
      <Text>AddWordScreen</Text>
    </View>
  );
};

export default AddWordScreen;
