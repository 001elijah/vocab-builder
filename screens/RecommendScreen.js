import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRoute } from "@react-navigation/native"
import LogoutButton from '../components/LogoutButton';
import SearchBar from '../components/SearchBar';
import Dropdown from '../components/Dropdown';
import ArrowRightIcon from '../assets/icons/ArrowRightIcon';
import VocabTable from '../components/VocabTable';
import { RECOMMEND_TABLE_HEADERS } from '../assets/utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllWords } from '../redux/words/wordsSelectors';
import { getAll } from '../redux/words/wordsOperations';

const RecommendScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const vocabData = useSelector(selectAllWords);
  const route = useRoute();

  useEffect(() => {
    dispatch(getAll({ page: 1, limit: 7 }));
  }, [])

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
          onPress={() => navigation.navigate("Training")}
        >
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>
      <View className="flex-1 mt-8 mb-14">
        <VocabTable
          routeName={route.name}
          headerData={RECOMMEND_TABLE_HEADERS}
          vocabData={vocabData.results}
        />
      </View>
    </View>
  );
}

export default RecommendScreen