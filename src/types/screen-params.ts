import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { FC } from 'react'
import { SmallOpponent } from './shared-types'

type ScreenParams = {
  Login: undefined
  CreateCv: undefined
  BottomBar: undefined
  Cv: { opponent: SmallOpponent; openedFrom?: 'sent' | 'received' }
  Match: { opponent: SmallOpponent }
  Nadzor: { opponent: SmallOpponent }
  Khitbah: { opponent: SmallOpponent }
}

type Screen<T extends keyof ScreenParams> = FC<NativeStackScreenProps<ScreenParams, T>>

export { Screen, ScreenParams }
