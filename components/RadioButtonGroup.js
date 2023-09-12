import { View } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";

const RadioButtonGroup = ({ data, onPress }) => {
  return (
    <View className="mt-2 flex-row">
      {data.map((radioButtonData) => (
        <RadioButton
          key={radioButtonData.id}
          radioButtonData={radioButtonData}
          onPress={onPress}
        />
      ))}
    </View>
  );
};

export default RadioButtonGroup;
