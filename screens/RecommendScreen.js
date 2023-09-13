import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import LogoutButton from '../components/LogoutButton';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import ArrowRightIcon from '../assets/icons/ArrowRightIcon';
import VocabTable from '../components/VocabTable';

const RecommendScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => null,
    });
  });
  return (
    <View className="px-4 justify-start h-full bg-light">
      <SearchBar />
      <Dropdown
        label={"Categories"}
        onSelect={setSelected}
        selected={selected}
      />
      <View className="mt-10 flex-row items-center">
        <Text className="font-['FixelDisplay-Regular'] text-base text-grey">
          To study:
        </Text>
        <Text className="text-black text-xl"> 20</Text>
      </View>
      <View className="mt-2 flex-row items-center">
        <Text className="text-black text-xl">Train oneself</Text>
        <TouchableOpacity
          className="pl-2"
          onPress={() => alert("handleTrainOneself")}
        >
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default RecommendScreen