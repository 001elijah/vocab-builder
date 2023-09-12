import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const RadioButton = ({ label, style, selected }) => {
  return (
    <TouchableOpacity className="mr-4 flex-row items-center gap-x-2">
      <View
        className={`h-6 w-6 rounded-full border-2 ${
          selected ? "border-green" : "border-greyRadioBorder"
        } items-center justify-center`}
      >
        {selected ? (
          <View className="h-[14px] w-[14px] rounded-full bg-green" />
        ) : null}
      </View>
      <Text className="font-['FixelDisplay-Regular'] text-xs text-black">
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default RadioButton;
