import { View, TextInput, TouchableOpacity } from "react-native";
import React, { useEffect, useMemo, useRef, useState } from "react";
import SearchIcon from "../assets/icons/SearchIcon";
import _ from "lodash";

const SearchBar = ({ onSet, searchQuery, handleSearch }) => {
  const [isSearchBarInFocus, setIsSearchBarInFocus] = useState(false);
  const toggleSearchBarFocus = () => setIsSearchBarInFocus(!isSearchBarInFocus);

  const ref = useRef();

  const handleChange = () => {
    handleSearch();
  };

  useEffect(() => {
    ref.current = handleChange;
  }, [handleChange]);

  const doCallbackWithDebounce = useMemo(() => {
    const callback = () => ref.current?.();
    return _.debounce(callback, 300);
  }, []);

  return (
    <View className="mt-4">
      <TextInput
        className={`h-14 px-6 border ${
          isSearchBarInFocus ? "border-green" : "border-light-grey"
        } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
        value={searchQuery}
        onChangeText={(e) => {
          doCallbackWithDebounce();
          onSet(e);
        }}
        onFocus={toggleSearchBarFocus}
        onBlur={toggleSearchBarFocus}
        placeholder="Find the word"
        placeholderTextColor="#121417"
        blurOnSubmit={true}
      />
      <TouchableOpacity
        className="absolute justify-center h-12 top-1 right-6"
        activeOpacity={0.5}
        onPress={handleSearch}
      >
        <SearchIcon />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
