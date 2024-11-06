import { Dimensions, StyleSheet, TextStyle, ViewStyle } from 'react-native'

import { Colors } from './colors'
import { typography } from './typography'

const numberOfLines = 5
const textHeight = 18

// Common-styles
const commonStyles = StyleSheet.create({
  absolute: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  } as ViewStyle,

  alignCenter: { alignSelf: 'center' },

  alignStart: { alignSelf: 'flex-start' },

  background: {
    backgroundColor: Colors.cultured,
  } as ViewStyle,

  borderLine: {
    borderColor: Colors.black10,
    borderWidth: StyleSheet.hairlineWidth,
  } as ViewStyle,

  borderRadius: {
    borderRadius: 8,
  } as ViewStyle,

  columnCenter: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  } as ViewStyle,

  columnCenterV: {
    flexDirection: 'column',
    justifyContent: 'center',
  } as ViewStyle,

  containerBottomButton: {
    backgroundColor: Colors.cultured,
    borderColor: Colors.black15,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    padding: 16,
    paddingTop: 8,
  },

  divider: {
    backgroundColor: Colors.lightGray,
    height: StyleSheet.hairlineWidth,
  },

  endVertical: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  } as ViewStyle,

  flex: {
    flex: 1,
  },

  flexGrow: {
    flexGrow: 1,
  } as ViewStyle,

  gap: {
    gap: 16,
  },

  helperText: {
    ...typography.heading5,
    ...typography.lowEmphasize,
  },

  helperTextError: {
    ...typography.heading5,
    ...typography.error,
  },

  multilineTextInput: {
    paddingVertical: 8,
    height: textHeight * numberOfLines,
    textAlignVertical: 'top',
  } as TextStyle,

  pagePadding: {
    padding: 16,
  } as ViewStyle,

  root: {
    backgroundColor: Colors.cultured,
    flex: 1,
  } as ViewStyle,

  row: {
    flexDirection: 'row',
  } as ViewStyle,

  rowCenterV: {
    alignItems: 'center',
    flexDirection: 'row',
  } as ViewStyle,

  screen: {
    backgroundColor: Colors.cultured,
    flex: 1,
    padding: 16,
  },

  smallGap: {
    gap: 8,
  },
})

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export { commonStyles, windowHeight, windowWidth }