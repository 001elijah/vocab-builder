import { View, Text, Image } from "react-native";
import React from 'react'
import UserIcon from "../assets/icons/UserIcon";

const ProfileCard = () => {
  return (
    <View className="flex-1">
      <View className="flex-2 items-center justify-center h-12 w-12 rounded-full bg-green">
        {/* <Image
            source={avatar ? { uri: avatar } : placeholderAvatarSource}
          /> */}
        <UserIcon />
      </View>
      <Text className="mt-1 font-['FixelDisplay-Regular'] text-xs text-center">
        Iryna
      </Text>
    </View>
  );
}

export default ProfileCard