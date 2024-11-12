import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FC } from 'react'
import { SmallOpponent } from './shared-types'

type ScreenParams = {
  BottomBar: undefined
  Cv: { opponent: SmallOpponent }
}

type Screen<T extends keyof ScreenParams> = FC<NativeStackScreenProps<ScreenParams, T>>

export { Screen, ScreenParams }
