import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, { useState } from 'react'
import PencilIcon from '../assets/icons/PencilIcon';
import TrashBinIcon from '../assets/icons/TrashBinIcon';
import { useDispatch } from "react-redux";
import { deleteOwnWord } from "../redux/words/wordsOperations";

const EditRemoveOptionsWindow = ({
  visible,
  setVisible,
  windowTop,
  setShowEditWindow,
  handleOpenModal,
  setWordsToEditWindow,
  wordId,
}) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteOwnWord({id: wordId}));
  }
  return (
    <>
      {visible && (
        <Modal visible={visible} transparent animationType="fade">
          <TouchableOpacity
            className="w-full h-full items-center"
            onPress={() => setVisible(false)}
          >
            <View
              className={`w-[117px] h-[70px] px-6 py-3 absolute bg-bright-white rounded-2xl shadow-md`}
              style={{ top: windowTop, right: 16 }}
            >
              <TouchableOpacity
                className="flex-row gap-x-2"
                onPress={() => {
                  setWordsToEditWindow();
                  setShowEditWindow(true);
                  handleOpenModal();
                }}
              >
                <PencilIcon />
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="mt-2 flex-row gap-x-2"
                onPress={handleDelete}
              >
                <TrashBinIcon />
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      )}
    </>
  );
};

export default EditRemoveOptionsWindow