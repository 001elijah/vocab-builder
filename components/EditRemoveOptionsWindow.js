import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from 'react'
import PencilIcon from '../assets/icons/PencilIcon';
import TrashBinIcon from '../assets/icons/TrashBinIcon';

const EditRemoveOptionsWindow = ({ visible, setVisible, windowTop }) => {
  return (
    <>
        {visible && <Modal visible={visible} transparent animationType="none">
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
                onPress={() => alert("Hello Edit")}
              >
                <PencilIcon />
                <Text>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="mt-2 flex-row gap-x-2"
                onPress={() => alert("Hello Delete")}
              >
                <TrashBinIcon />
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>}
    </>
  );
}

export default EditRemoveOptionsWindow