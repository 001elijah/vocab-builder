import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import LogoutButton from "../components/LogoutButton";
import GoBackButton from "../components/GoBackButton";
import Dropdown from "../components/Dropdown";
import UkrainianTextInputWithLabel from "../components/UkrainianTextInputWithLabel";
import EnglishTextInputWithLable from "../components/EnglishTextInputWithLable";
import { useDispatch } from "react-redux";
import { createNew } from "../redux/words/wordsOperations";

const AddWordScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(undefined);
  const [radioSelected, setRadioSelected] = useState(undefined);
  const [ua, setUa] = useState("");
  const [en, setEn] = useState("");

  const handleAddWord = () => {
    const newWord = {
      en: en,
      ua: ua,
      category: selected,
      isIrregular: Boolean(radioSelected.value === "irregular")
    };
    dispatch(createNew(newWord));
    handleGoBack();
  }

  const handleGoBack = () => {
    navigation.goBack();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogoutButton />,
      headerLeft: () => <GoBackButton goBackFunction={handleGoBack} />,
    });
  });
  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={100}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="px-4 justify-start h-full bg-light">
          <Text className="mt-8 font-['FixelDisplay-SemiBold'] text-2xl text-black">
            Add word
          </Text>
          <Text className="mt-4 font-['FixelDisplay-Regular'] text-base text-black">
            Adding a new word to the dictionary is an important step in
            enriching the language base and expanding the vocabulary.{" "}
          </Text>
          <Dropdown
            label={"Categories"}
            onSelect={setSelected}
            selected={selected}
            onRadioSelect={setRadioSelected}
          />
          {radioSelected?.value === "irregular" && (
            <Text className="mt-2 font-['FixelDisplay-Regular'] text-xxs text-black">
              Such data must be entered in the format I form-II form-III form.
            </Text>
          )}
          <UkrainianTextInputWithLabel setUa={setUa} />
          <EnglishTextInputWithLable setEn={setEn} />
          <TouchableOpacity
            className="mt-6 flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
            onPress={handleAddWord}
          >
            <Text className="font-['FixelDisplay-Bold'] text-base text-white">
              Add
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-2 mx-auto bg-transparent"
            onPress={handleGoBack}
          >
            <Text className="font-['FixelDisplay-Bold'] text-grey text-base">
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddWordScreen;
