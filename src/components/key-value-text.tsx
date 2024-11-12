import { typography } from '@/styles'
import React from 'react'
import { Text, View, ViewStyle } from 'react-native'

type Props = {
  title: string
  value: string
}

const KeyValueText = ({ title, value }: Props) => {
  const rootStyle: ViewStyle = { gap: 2 }
  return (
    <View style={rootStyle}>
      <Text style={[typography.heading3, typography.semibold]}>{title}</Text>
      <Text style={typography.heading3}>{value}</Text>
    </View>
  )
}

export { KeyValueText }
