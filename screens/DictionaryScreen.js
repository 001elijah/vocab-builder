import { View, Text, TouchableWithoutFeedback, Keyboard } from "react-native";
import React, { useLayoutEffect, useState } from 'react'
import LogoutButton from "../components/LogoutButton";
import SearchBar from "../components/SearchBar";
import Dropdown from "../components/Dropdown";

const DictionaryScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined);
    useLayoutEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <LogoutButton />
        ),
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="px-4 flex-1 justify-start bg-light">
        <SearchBar />
        <Dropdown label={"Categories"} data={data} onSelect={setSelected} />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DictionaryScreen