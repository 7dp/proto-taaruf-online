import { StyleSheet, TextStyle } from 'react-native'

import { Colors } from './colors'

const getLineHeightFor = (fontSize: number) => {
  return fontSize + Math.round(fontSize / 4)
}

const typography = StyleSheet.create({
  bold: {
    fontWeight: '700',
  },

  cultured: {
    color: Colors.cultured,
  },

  description: {
    color: Colors.black50,
  } as TextStyle,

  error: {
    color: Colors.red,
  },

  heading1: {
    color: Colors.black82,
    fontSize: 24,
    lineHeight: getLineHeightFor(24),
    fontWeight: '700',
  } as TextStyle,

  heading2: {
    color: Colors.black82,
    fontSize: 20,
    lineHeight: getLineHeightFor(20),
    fontWeight: '700',
  } as TextStyle,

  heading3: {
    color: Colors.black82,
    fontSize: 17,
    lineHeight: getLineHeightFor(17),
  } as TextStyle,

  heading4: {
    color: Colors.black82,
    fontSize: 14,
    lineHeight: getLineHeightFor(14),
  } as TextStyle,

  heading5: {
    color: Colors.black82,
    fontSize: 12,
    lineHeight: getLineHeightFor(12),
  } as TextStyle,

  heading6: {
    color: Colors.black82,
    fontSize: 10,
    lineHeight: getLineHeightFor(10),
  } as TextStyle,

  labelField: {
    color: Colors.black50,
    fontSize: 14,
    lineHeight: getLineHeightFor(14),
  },

  lowEmphasize: {
    color: Colors.black34,
  },

  placeholder: {
    color: Colors.black34,
    fontSize: 14,
    lineHeight: getLineHeightFor(14),
  } as TextStyle,

  semibold: {
    fontWeight: '600',
  },

  white: {
    color: Colors.white,
  },
})

export { typography }
