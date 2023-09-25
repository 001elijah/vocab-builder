import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import HandleIcon from "../assets/icons/HandleIcon";
import UkrainianTextInputWithLabel from "./UkrainianTextInputWithLabel";
import EnglishTextInputWithLable from "./EnglishTextInputWithLable";
import { useDispatch } from "react-redux";
import { editOwnWord } from "../redux/words/wordsOperations";

const EditWindow = ({ showEditWindow, setShowEditWindow, wordData }) => {
  const dispatch = useDispatch();
  const [ukrainianWord, setUkrainianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const handleCancel = () => {
    setShowEditWindow(false);
  };

  const handleSave = () => {
    const newWordData = {
      ...wordData,
      ua: ukrainianWord.toLowerCase(),
      en: englishWord.toLowerCase(),
    };
    dispatch(editOwnWord(newWordData));
    setShowEditWindow(false);
  };

  return (
    <>
      {showEditWindow && (
        <Modal visible={showEditWindow} transparent animationType="slide">
          <TouchableOpacity
            className="w-full h-full items-center"
            onPress={() => setShowEditWindow(false)}
          ></TouchableOpacity>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={-80}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                className={`w-full h-[470px] px-4 py-2 absolute bg-greenishGrey rounded-3xl`}
                style={{ bottom: 0 }}
              >
                <View className="mx-auto">
                  <HandleIcon />
                </View>
                <UkrainianTextInputWithLabel
                  ua={wordData.ua}
                  ukrainianWord={
                    ukrainianWord.charAt(0).toUpperCase() +
                    ukrainianWord.slice(1)
                  }
                  setUkrainianWord={setUkrainianWord}
                />
                <EnglishTextInputWithLable
                  en={wordData.en}
                  englishWord={
                    englishWord.charAt(0).toUpperCase() + englishWord.slice(1)
                  }
                  setEnglishWord={setEnglishWord}
                />
                <TouchableOpacity
                  className="mt-8 flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
                  onPress={handleSave}
                >
                  <Text className="font-['FixelDisplay-Bold'] text-base text-white">
                    Save
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
        </Modal>
      )}
    </>
  );
};

export default EditWindow;
