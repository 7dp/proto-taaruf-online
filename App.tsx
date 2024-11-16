import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import {
  BottomBarScreen,
  CreateCvScreen,
  CvScreen,
  LoginScreen,
  MatchScreen,
  NadzorScreen,
} from '@/screens'
import { KhitbahScreen } from '@/screens/khitbah'
import { ScreenParams } from '@/types'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator<ScreenParams>()

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GestureHandlerRootView>
        <KeyboardProvider>
          <NavigationContainer
            onStateChange={(state) => {
              console.log('CURRENT SCREEN:', state?.routes[state.index].name)
            }}>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerTitle: 'Log In' }}
              />
              <Stack.Screen
                name="CreateCv"
                component={CreateCvScreen}
                options={{ headerTitle: 'Buat CV' }}
              />
              <Stack.Screen
                name="BottomBar"
                component={BottomBarScreen}
                options={{ headerTitle: 'Taaruf Online' }}
              />
              <Stack.Screen name="Cv" component={CvScreen} options={{ headerTitle: 'CV' }} />
              <Stack.Screen
                name="Match"
                component={MatchScreen}
                options={{ headerTitle: 'Match' }}
              />
              <Stack.Screen
                name="Nadzor"
                component={NadzorScreen}
                options={{ headerTitle: 'Nadzor' }}
              />
              <Stack.Screen
                name="Khitbah"
                component={KhitbahScreen}
                options={{ headerTitle: 'Khitbah' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
