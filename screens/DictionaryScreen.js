import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import PlusIcon from "../assets/icons/PlusIcon";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import VocabTable from "../components/VocabTable";
import EditWindow from "../components/EditWindow";

const DictionaryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined);
  const [showEditWindow, setShowEditWindow] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => null,
    });
  });

  const data = [
    { label: "Verb", value: "verb" },
    { label: "Participle", value: "participle" },
    { label: "Noun", value: "noun" },
    { label: "Adjective", value: "adjective" },
    { label: "Pronoun", value: "pronoun" },
    { label: "Numerals", value: "numerals" },
    { label: "Adverb", value: "adverb" },
    { label: "Preposition", value: "preposition" },
    { label: "Conjuction", value: "conjuction" },
    { label: "Phrasal verb", value: "phrasal verb" },
    { label: "Functional phrase", value: "functional phrase" },
  ];
  return (
    <View className="px-4 justify-start h-full bg-light">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <SearchBar />
          <Dropdown label={"Categories"} data={data} onSelect={setSelected} />
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
              onPress={() => alert("handleAddWord")}
            >
              <PlusIcon />
            </TouchableOpacity>
            <Text className="text-black text-xl">Train oneself</Text>
            <TouchableOpacity
              className="pl-2"
              onPress={() => alert("handleTrainOneself")}
            >
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Text className="">showEditWindow: {`${showEditWindow}`}</Text>
      <View className="flex-1 mt-8 mb-14">
        <VocabTable setShowEditWindow={setShowEditWindow} />
      </View>
      <EditWindow
        showEditWindow={showEditWindow}
        setShowEditWindow={setShowEditWindow}
      />
    </View>
  );
};

export default DictionaryScreen;
