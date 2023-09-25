import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import LogoutButton from "../components/LogoutButton";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import PlusIcon from "../assets/icons/PlusIcon";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import VocabTable from "../components/VocabTable";
import EditWindow from "../components/EditWindow";
import {
  DICTIONARY_TABLE_HEADERS,
  RADIO_BUTTON_GROUP_DATA,
} from "../assets/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  selectOwnWords,
  selectStatistics,
} from "../redux/words/wordsSelectors";
import { getOwnFiltered } from "../redux/words/wordsOperations";

const DictionaryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const vocabData = useSelector(selectOwnWords);
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

  const [showEditWindow, setShowEditWindow] = useState(false);
  const [wordData, setWordData] = useState({});

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => null,
    });
  });

  const handleSearch = () => {
    const params = {
      keyword: searchQuery.trim().toLowerCase(),
      page: 1,
      limit: 100,
    };
    if (searchQuery.trim().length > 0) {
      params.keyword = searchQuery.trim().toLowerCase();
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
    dispatch(getOwnFiltered(params));
  };

  return (
    <View className="px-4 justify-start h-full bg-light">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
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
            <Text className="text-black text-xl" style={{ fontSize: 20 }}>
              {" "}
              {statistics?.totalCount}
            </Text>
          </View>
          <View className="mt-2 flex-row items-center">
            <Text className="text-black text-xl">Add word</Text>
            <TouchableOpacity
              className="pl-2 pr-4"
              onPress={() => navigation.navigate("AddWordScreen")}
            >
              <PlusIcon />
            </TouchableOpacity>
            <Text className="text-black text-xl">Train oneself</Text>
            <TouchableOpacity
              className="pl-2"
              onPress={() => navigation.navigate("Training")}
            >
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View className="flex-1 mt-8 mb-14">
        <VocabTable
          routeName={route.name}
          headerData={DICTIONARY_TABLE_HEADERS}
          setShowEditWindow={setShowEditWindow}
          setWordData={setWordData}
          vocabData={vocabData.results}
        />
      </View>
      <EditWindow
        wordData={wordData}
        showEditWindow={showEditWindow}
        setShowEditWindow={setShowEditWindow}
      />
    </View>
  );
};

export default DictionaryScreen;
