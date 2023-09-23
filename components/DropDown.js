import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import ChevronDownIcon from "../assets/icons/ChevronDownIcon";
import RadioButtonGroup from "./RadioButtonGroup";

import { selectCategories } from "../redux/words/wordsSelectors";
import { useSelector } from "react-redux";

const Dropdown = ({
  label,
  onSelect,
  selected,
  onRadioSelect,
  radioButtonGroupData,
  setRadioButtonGroupData,
}) => {
  const categories = useSelector(selectCategories);

  const DropdownButton = useRef();
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const onRadioBtnClick = (item) => {
    let updatedState = radioButtonGroupData.map((radioButtonItem) => {
      if (radioButtonItem.id === item.id) {
        onRadioSelect && onRadioSelect({ ...radioButtonItem, selected: true });
        return { ...radioButtonItem, selected: true };
      } else {
        return { ...radioButtonItem, selected: false };
      }
    });
    setRadioButtonGroupData(updatedState);
  };

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
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity className="py-2" onPress={() => onItemPress(item)}>
      <Text
        className={`font-['FixelDisplay-Regular'] text-base ${
          selected === item ? "text-green" : "text-black"
        }`}
      >
        {item.charAt(0).toUpperCase() + item.slice(1)}
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
          animationType="fade"
        >
          <TouchableOpacity
            className="w-full h-full items-center"
            onPress={() => setVisible(false)}
          >
            <View
              className={`w-[343px] h-[240px] px-6 py-1 absolute bg-bright-white rounded-2xl shadow-md`}
              style={{ top: dropdownTop }}
            >
              <FlatList
                data={categories}
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
    <View className="mt-4">
      <TouchableOpacity
        ref={DropdownButton}
        className="h-14 px-6 py-0 border border-light-grey rounded-2xl"
        onPress={toggleDropdown}
      >
        {renderDropdown()}
        <View className="flex-1 flex-row items-center justify-between">
          <Text className="flex-1 font-['FixelDisplay-Regular'] text-base text-black">
            {(selected &&
              selected.charAt(0).toUpperCase() + selected.slice(1)) ||
              label}
          </Text>
          <ChevronDownIcon />
        </View>
      </TouchableOpacity>
      {selected === "verb" && (
        <RadioButtonGroup
          data={radioButtonGroupData}
          onPress={onRadioBtnClick}
        />
      )}
    </View>
  );
};

export default Dropdown;
