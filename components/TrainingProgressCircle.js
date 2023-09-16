import { View, Text } from 'react-native'
import React from 'react'
import ProgressCircleWithText from '../assets/icons/ProgressCircleWithText';

const TrainingProgressCircle = ({ progress, total }) => {
  return (
    <View className="mt-3.5 ml-auto items-center justify-center">
      <View className="-rotate-90">
        <ProgressCircleWithText progress={progress} total={total} />
      </View>
      <Text className="absolute">{progress}</Text>
    </View>
  );
}

export default TrainingProgressCircle