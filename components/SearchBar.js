import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import SearchIcon from '../assets/icons/SearchIcon';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchBarInFocus, setIsSearchBarInFocus] = useState(false);
  const toggleSearchBarFocus = () => setIsSearchBarInFocus(!isSearchBarInFocus);
  return (
    <View className="mt-4">
      <TextInput
        className={`h-14 px-6 pb-2 border ${
          isSearchBarInFocus ? "border-green" : "border-light-grey"
        } rounded-2xl font-['FixelDisplay-Regular'] text-base text-black`}
        value={searchQuery}
        onChangeText={setSearchQuery}
        onFocus={toggleSearchBarFocus}
        onBlur={toggleSearchBarFocus}
        placeholder="Find the word"
        placeholderTextColor="#121417"
        blurOnSubmit={true}
      />
      <TouchableOpacity
        className="absolute justify-center h-12 top-1 right-6"
        activeOpacity={0.5}
        onPress={() => alert("handleSearch")}
      >
        <SearchIcon />
      </TouchableOpacity>
    </View>
  );
}

export default SearchBar