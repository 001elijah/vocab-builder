import { View, Text } from "react-native";
import React from "react";
import UserIcon from "../assets/icons/UserIcon";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/auth/authSelectors";

const ProfileCard = () => {
  const userData = useSelector(selectUser);
  return (
    <View className="items-center">
      <View className="flex-2 items-center justify-center h-12 w-12 rounded-full bg-green">
        <UserIcon />
      </View>
      <Text className="mt-1 font-['FixelDisplay-Regular'] text-xs text-center">
        {userData.name}
      </Text>
    </View>
  );
};

export default ProfileCard;
