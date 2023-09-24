import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import LogoutButton from "../components/LogoutButton";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import VocabTable from "../components/VocabTable";
import {
  RADIO_BUTTON_GROUP_DATA,
  RECOMMEND_TABLE_HEADERS,
} from "../assets/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllWords,
  selectStatistics,
} from "../redux/words/wordsSelectors";
import { getAllFiltered } from "../redux/words/wordsOperations";

const RecommendScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const vocabData = useSelector(selectAllWords);
  const statistics = useSelector(selectStatistics);
  const route = useRoute();

  const [selected, setSelected] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState("");
  const [radioButtonGroupData, setRadioButtonGroupData] = useState(
    RADIO_BUTTON_GROUP_DATA
  );

  useEffect(() => {
    handleSearch();
  }, [selected, radioButtonGroupData]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => null,
    });
  });

  const handleSearch = () => {
    const params = {
      keyword: searchQuery.trim(),
      page: 1,
      limit: 100,
    };
    if (searchQuery.trim().length > 0) {
      params.keyword = searchQuery.trim();
    } else {
      params.keyword = "";
    }
    if (selected) {
      params.category = selected;
      if (selected === "verb") {
        if (
          radioButtonGroupData.filter((radio) => radio.selected === true)
            .length === 1
        ) {
          if (
            radioButtonGroupData.filter((radio) => radio.selected === true)[0]
              .value === "irregular"
          ) {
            params.isIrregular = true;
          } else if (
            radioButtonGroupData.filter((radio) => radio.selected === true)[0]
              .value === "regular"
          ) {
            params.isIrregular = false;
          }
        }
      }
    }
    dispatch(getAllFiltered(params));
  };

  return (
    <View className="px-4 justify-start h-full bg-light">
      <SearchBar
        onSet={setSearchQuery}
        searchQuery={searchQuery}
        handleSearch={handleSearch}
      />
      <Dropdown
        label={"Categories"}
        onSelect={setSelected}
        selected={selected}
        radioButtonGroupData={radioButtonGroupData}
        setRadioButtonGroupData={setRadioButtonGroupData}
        handleSearch={handleSearch}
      />
      <View className="mt-10 flex-row items-center">
        <Text className="font-['FixelDisplay-Regular'] text-base text-grey">
          To study:
        </Text>
        <Text className="text-black text-xl"> {statistics?.totalCount}</Text>
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
};

export default RecommendScreen;
