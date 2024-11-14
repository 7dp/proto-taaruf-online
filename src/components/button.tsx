import React from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native'

import { Colors, commonStyles, typography } from '@/styles'

type Type = 'contained' | 'outline' | 'text'

type Props = {
  text: string
  indicatorProps?: ActivityIndicatorProps
  isLoading?: boolean
  textProps?: TextProps
  props?: Partial<TouchableOpacityProps>
  type?: Type
}

const Button = (iProps: Props) => {
  const { text, indicatorProps, isLoading = false, textProps, props, type = 'contained' } = iProps

  const isDisabled = !!{ ...props }?.disabled || isLoading

  const renderContent = () => {
    let labelStyle: TextStyle = {}
    if (type === 'contained') labelStyle = style.labelContained
    if (type === 'outline')
      labelStyle = {
        ...style.labelOutlined,
        ...(isDisabled && style.labelOutlinedDisabled),
      }
    if (type === 'text') {
      labelStyle = { ...style.labelText, ...(isDisabled && style.labelTextDisabled) }
    }

    return (
      <View style={commonStyles.rowCenterV}>
        {isLoading ? (
          <ActivityIndicator
            color={type === 'contained' ? Colors.cultured : Colors.black34}
            size="small"
            {...indicatorProps}
            style={[style.indicator, { ...indicatorProps }?.style]}
          />
        ) : null}
        <Text style={[labelStyle, { ...textProps }?.style]}>{text}</Text>
      </View>
    )
  }

  let pressableStyle: ViewStyle = {}
  if (type === 'contained') {
    pressableStyle = {
      ...style.contained,
      ...(isDisabled && style.containedDisabled),
    }
  }
  if (type === 'outline') {
    pressableStyle = {
      ...style.outlined,
      ...(isDisabled && style.outlinedDisabled),
    }
  }
  if (type === 'text') {
    pressableStyle = { ...style.text, ...(isDisabled && style.textDisabled) }
  }

  return (
    <TouchableOpacity
      disabled={isDisabled}
      {...props}
      style={[pressableStyle, { ...props }?.style]}>
      {renderContent()}
    </TouchableOpacity>
  )
}

const baseStyle = StyleSheet.create({
  label: {
    ...typography.heading4,
    fontWeight: '700',
    letterSpacing: 0.7,
    lineHeight: undefined,
  } as TextStyle,

  pressable: {
    ...commonStyles.columnCenter,
    paddingHorizontal: 16,
    borderRadius: 12,
    height: 48,
  } as ViewStyle,
})

const style = StyleSheet.create({
  contained: {
    ...baseStyle.pressable,
    backgroundColor: Colors.dodgerBlue,
  },

  containedDisabled: {
    backgroundColor: Colors.black25,
    shadowOpacity: 0,
  },

  indicator: {
    paddingRight: 8,
  } as ViewStyle,

  labelContained: {
    ...baseStyle.label,
    color: Colors.cultured,
  } as TextStyle,

  labelOutlined: {
    ...baseStyle.label,
    color: Colors.dodgerBlue,
  } as TextStyle,

  labelOutlinedDisabled: {
    color: Colors.black34,
  } as TextStyle,

  labelText: {
    ...baseStyle.label,
    color: Colors.dodgerBlue,
    textDecorationLine: 'underline',
  } as TextStyle,

  labelTextDisabled: {
    color: Colors.black34,
  } as TextStyle,

  outlined: {
    ...baseStyle.pressable,
    borderColor: Colors.dodgerBlue,
    borderWidth: 1,
  },

  outlinedDisabled: {
    borderColor: Colors.black25,
  },

  text: {
    ...commonStyles.columnCenter,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },

  textDisabled: {
    color: Colors.black25,
  },
})

export { Button }
