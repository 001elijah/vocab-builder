import { Text, TouchableOpacity } from "react-native";
import React from "react";
import LogOutIcon from "../assets/icons/LogOutIcon";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/authOperations";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleLogout = async () => {
    await dispatch(logout());
    navigation.replace("Auth");
  };
  return (
    <TouchableOpacity
      className="pr-4 flex-1 flex-row gap-1.5 items-center"
      onPress={handleLogout}
    >
      <Text className="font-['FixelDisplay-Regular'] text-green text-base">
        Log out
      </Text>
      <LogOutIcon />
    </TouchableOpacity>
  );
};

export default LogoutButton;
