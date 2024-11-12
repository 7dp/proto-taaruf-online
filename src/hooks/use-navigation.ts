import { ScreenParams } from '@/types'
import { useNavigation as useReactNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type PartialStackParamList = Partial<ScreenParams>
type ScreenParamProps = NativeStackNavigationProp<PartialStackParamList>

const useNavigation = () => {
  const navigation = useReactNavigation<ScreenParamProps>()
  return navigation
}

export { useNavigation }
