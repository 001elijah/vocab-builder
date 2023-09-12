import { View, Text } from 'react-native'
import React from 'react'
import RadioButton from './RadioButton'

const RadioButtonGroup = ({ data }) => {
    return (
        <View className="mt-2 flex-row">
            {data.map(radio => <RadioButton key={radio.value} label={radio.label} />)}
        </View>
    );
}

export default RadioButtonGroup