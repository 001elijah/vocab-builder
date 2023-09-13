import React from "react";
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

const EditWindow = ({ showEditWindow, setShowEditWindow, ua, en }) => {
  const handleCancel = () => {
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
                <UkrainianTextInputWithLabel ua={ua} />
                <EnglishTextInputWithLable en={en} />
                <TouchableOpacity
                  className="mt-8 flex-2 items-center justify-center w-full h-14 bg-green rounded-[30px]"
                  onPress={() => alert("handleSave")}
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
