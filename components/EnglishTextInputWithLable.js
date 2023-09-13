import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import UnitedKingdomIcon from '../assets/icons/UnitedKingdomIcon';

const EnglishTextInputWithLable = ({ en = "" }) => {
    const [englishWord, setEnglishWord] = useState("");
    const [isEnglishWordInFocus, setIsEnglishWordInFocus] = useState(false);
    const toggleEnglishInFocus = () =>
        setIsEnglishWordInFocus(!isEnglishWordInFocus);
    useEffect(() => {
      setEnglishWord(en);
    }, [en]);
  return (
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
        placeholderTextColor="#121417"
        blurOnSubmit={true}
      />
    </View>
  );
}

export default EnglishTextInputWithLable