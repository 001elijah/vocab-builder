import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";

const Dropdown = ({ label, data, onSelect }) => {
  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(undefined);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = () => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure((_fx, _fy, _w, h, _px, py) => {
      setDropdownTop(py + h);
    });
    setVisible(true);
  };

  const onItemPress = (item) => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity className="py-2" onPress={() => onItemPress(item)}>
      <Text className={`font-['FixelDisplay-Regular'] text-base ${selected?.label === item.label ? 'text-green' : 'text-black'}`}>
        {item.label}
      </Text>
    </TouchableOpacity>
  );

  const renderDropdown = () => {
    if (visible) {
      return (
        <Modal
          visible={visible}
          className="absolute"
          transparent
          animationType="none"
        >
          <TouchableOpacity
            className="w-full h-full items-center"
            onPress={() => setVisible(false)}
          >
            <View
              className={`w-[343px] h-[240px] px-6 py-1 absolute bg-bright-white rounded-2xl shadow-md top-[${dropdownTop + 1}px]`}
            >
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </Modal>
      );
    }
  };
  return (
    <View className="flex-1 mt-4">
      <TouchableOpacity
        ref={DropdownButton}
        className="h-14 px-6 py-0 border border-light-grey rounded-2xl"
        onPress={toggleDropdown}
      >
        {renderDropdown()}
        <View className="flex-1 flex-row items-center justify-between">
          <Text className="flex-1 font-['FixelDisplay-Regular'] text-base text-black">
            {(selected && selected.label) || label}
          </Text>
          <ChevronDownIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Dropdown;
