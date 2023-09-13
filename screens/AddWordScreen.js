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

const AddWordScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(undefined);

  const handleCancel = () => {
    navigation.goBack();
  };

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
          />
          <UkrainianTextInputWithLabel />
          <EnglishTextInputWithLable />
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AddWordScreen;
