import { Text, TouchableOpacity } from "react-native";
import React from 'react'
import LogOutIcon from '../assets/icons/LogOutIcon';
import { useNavigation } from "@react-navigation/native";

const LogoutButton = () => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity
      className="pr-4 flex-1 flex-row gap-1.5 items-center"
      onPress={() => navigation.replace("Auth")}
    >
      <Text className="font-['FixelDisplay-Regular'] text-green text-base">
        Log out
      </Text>
      <LogOutIcon />
    </TouchableOpacity>
  );
}

export default LogoutButton