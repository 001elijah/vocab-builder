import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import UkraineIcon from '../assets/icons/UkraineIcon';

const UkrainianTextInputWithLabel = ({ua = ""}) => {
    const [ukrainianWord, setUkrainianWord] = useState("");
    const [isUkrainianWordInFocus, setIsUkrainianWordInFocus] = useState(false);
    const toggleUkrainianInFocus = () =>
        setIsUkrainianWordInFocus(!isUkrainianWordInFocus);
    useEffect(() => {
      setUkrainianWord(ua);
    }, [ua]);
  return (
    <View>
      <View className="mt-4 flex-row items-center gap-x-2">
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
        placeholderTextColor="#121417"
        blurOnSubmit={true}
      />
    </View>
  );
}

export default UkrainianTextInputWithLabel