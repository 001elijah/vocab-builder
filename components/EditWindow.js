import { View, TouchableOpacity, Modal, Text, TextInput } from "react-native";
import React, { useState } from "react";
import HandleIcon from "../assets/icons/HandleIcon";
import UkraineIcon from "../assets/icons/UkraineIcon";
import UnitedKingdomIcon from "../assets/icons/UnitedKingdomIcon";

const EditWindow = ({ showEditWindow, setShowEditWindow }) => {
  const [ukrainianWord, setUkrainianWord] = useState("");
  const [isUkrainianWordInFocus, setIsUkrainianWordInFocus] = useState(false);
  const [englishWord, setEnglishWord] = useState("");
  const [isEnglishWordInFocus, setIsEnglishWordInFocus] = useState(false);
  const toggleUkrainianInFocus = () =>
    setIsUkrainianWordInFocus(!isUkrainianWordInFocus);
  const toggleEnglishInFocus = () =>
    setIsEnglishWordInFocus(!isEnglishWordInFocus);
  return (
    <>
      {showEditWindow && (
        <Modal
          className="absolute"
          visible={showEditWindow}
          transparent
          animationType="slide"
        >
          <TouchableOpacity
            className="w-full h-full items-center"
            onPress={() => setShowEditWindow(false)}
          ></TouchableOpacity>
          <View
            className={`w-full h-[492px] px-4 py-2 absolute bg-greenishGrey rounded-3xl`}
            style={{ top: 340 }}
          >
            <View className="mx-auto">
              <HandleIcon />
            </View>
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
                placeholder={ukrainianWord}
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
                placeholder={englishWord}
                placeholderTextColor="#121417"
                blurOnSubmit={true}
              />
            </View>
            <TouchableOpacity
              className="mt-8 flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
              //   onPress={handleRegistrationSubmit}
            >
              <Text className="font-['FixelDisplay-Bold'] text-base text-white">
                Save
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="mx-auto bg-transparent mt-4"
              //   onPress={() => navigation.navigate("RegistrationScreen")}
            >
              <Text className="font-['FixelDisplay-Bold'] text-grey text-base">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
    </>
  );
};

export default EditWindow;
