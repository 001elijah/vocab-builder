import { TouchableOpacity } from "react-native";
import React from "react";
import ChevronLeftIcon from "../assets/icons/ChevronLeftIcon";

const GoBackButton = ({ goBackFunction }) => {
  return (
    <TouchableOpacity className="ml-4" onPress={goBackFunction}>
      <ChevronLeftIcon />
    </TouchableOpacity>
  );
};

export default GoBackButton;
