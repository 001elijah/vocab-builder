import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";
import PlusIcon from "../assets/icons/PlusIcon";
import ArrowRightIcon from "../assets/icons/ArrowRightIcon";
import VocabTable from "../components/VocabTable";
import EditWindow from "../components/EditWindow";
import RadioButtonGroup from "../components/RadioButtonGroup";

const DictionaryScreen = ({ navigation }) => {
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
          {selected?.value === "verb"
            && <RadioButtonGroup
              data={[{ label: "Regular", value: "regular" }, { label: "Irregular", value: "irregular" }]} />}
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
      <View className="flex-1 mt-8 mb-14">
        <VocabTable
          setShowEditWindow={setShowEditWindow}
          setUa={setEditWindowUa}
          setEn={setEditWindowEn}
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
