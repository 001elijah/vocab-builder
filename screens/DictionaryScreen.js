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
import { DICTIONARY_TABLE_HEADERS } from "../assets/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectOwnWords } from "../redux/words/wordsSelectors";
import { getOwn } from "../redux/words/wordsOperations";

const DictionaryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const vocabData = useSelector(selectOwnWords);

  useEffect(() => {
    dispatch(getOwn({ page: 1, limit: 7 }))
  }, [])

  const route = useRoute();
  
  const [selected, setSelected] = useState(undefined);

  const [showEditWindow, setShowEditWindow] = useState(false);
  const [editWindowUa, setEditWindowUa] = useState("");
  const [editWindowEn, setEditWindowEn] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => null,
    });
  });

  return (
    <View className="px-4 justify-start h-full bg-light">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
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
          setUa={setEditWindowUa}
          setEn={setEditWindowEn}
          vocabData={vocabData.results}
        />
      </View>
      <EditWindow
        ua={editWindowUa}
        en={editWindowEn}
        showEditWindow={showEditWindow}
        setShowEditWindow={setShowEditWindow}
      />
    </View>
  );
};

export default DictionaryScreen;
