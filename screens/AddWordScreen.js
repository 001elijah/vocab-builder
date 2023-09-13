import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import GoBackButton from "../components/GoBackButton";
import Dropdown from "../components/Dropdown";
import RadioButtonGroup from "../components/RadioButtonGroup";
import UkraineIcon from "../assets/icons/UkraineIcon";
import UnitedKingdomIcon from "../assets/icons/UnitedKingdomIcon";

const AddWordScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined);

  const [radioButtonGroupData, setRadioButtonGroupData] = useState([
    { id: 1, label: "Regular", value: "regular", selected: false },
    { id: 2, label: "Irregular", value: "irregular", selected: false },
  ]);

  const [ukrainianWord, setUkrainianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const [isUkrainianWordInFocus, setIsUkrainianWordInFocus] = useState(false);
  const [isEnglishWordInFocus, setIsEnglishWordInFocus] = useState(false);

  const toggleUkrainianInFocus = () =>
    setIsUkrainianWordInFocus(!isUkrainianWordInFocus);
  const toggleEnglishInFocus = () =>
    setIsEnglishWordInFocus(!isEnglishWordInFocus);
  
  const handleCancel = () => {
    setUkrainianWord("");
    setEnglishWord("");
    navigation.goBack();
  };

  const onRadioBtnClick = (item) => {
    let updatedState = radioButtonGroupData.map((radioButtonItem) =>
      radioButtonItem.id === item.id
        ? { ...radioButtonItem, selected: true }
        : { ...radioButtonItem, selected: false }
    );
    setRadioButtonGroupData(updatedState);
  };

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

  useLayoutEffect(() => {
    const handleGoBack = () => {
      navigation.goBack();
    };
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => <GoBackButton goBackFunction={handleGoBack} />,
    });
  });
  return (
    <View className="px-4 justify-start h-full bg-light">
      <Text className="mt-8 font-['FixelDisplay-SemiBold'] text-2xl text-black">
        Add word
      </Text>
      <Text className="mt-4 font-['FixelDisplay-Regular'] text-base text-black">
        Adding a new word to the dictionary is an important step in enriching
        the language base and expanding the vocabulary.{" "}
      </Text>
      <Dropdown label={"Categories"} data={data} onSelect={setSelected} />
      {selected?.value === "verb" && (
        <RadioButtonGroup
          data={radioButtonGroupData}
          onPress={onRadioBtnClick}
        />
      )}
      <View>
        <View className="mt-5 flex-row items-center gap-x-2">
          <UkraineIcon />
          <Text>Ukrainian</Text>
        </View>
        <TextInput
          className={`h-14 w-full mt-2 px-5 pb-2 align-middle border ${
            isUkrainianWordInFocus ? "border-green" : "border-light-grey"
          } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
          value={ukrainianWord}
          onChangeText={setUkrainianWord}
          onFocus={toggleUkrainianInFocus}
          onBlur={toggleUkrainianInFocus}
          // placeholder={ukrainianWord}
          placeholderTextColor="#121417"
          blurOnSubmit={true}
        />
      </View>
      <View>
        <View className="mt-6 flex-row items-center gap-x-2">
          <UnitedKingdomIcon />
          <Text>English</Text>
        </View>
        <TextInput
          className={`h-14 w-full mt-2 px-5 pb-2 align-middle border ${
            isEnglishWordInFocus ? "border-green" : "border-light-grey"
          } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
          value={englishWord}
          onChangeText={setEnglishWord}
          onFocus={toggleEnglishInFocus}
          onBlur={toggleEnglishInFocus}
          // placeholder={englishWord}
          placeholderTextColor="#121417"
          blurOnSubmit={true}
        />
      </View>
      <TouchableOpacity
        className="mt-8 flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
        onPress={() => alert("handleAdd")}
      >
        <Text className="font-['FixelDisplay-Bold'] text-base text-white">
          Add
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        className="mx-auto bg-transparent mt-2"
        onPress={handleCancel}
      >
        <Text className="font-['FixelDisplay-Bold'] text-grey text-base">
          Cancel
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddWordScreen;
