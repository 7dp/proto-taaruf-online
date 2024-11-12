import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { BottomBarScreen, CvScreen } from '@/screens'
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
            <Stack.Navigator>
              <Stack.Screen
                name="BottomBar"
                component={BottomBarScreen}
                options={{ headerTitle: 'Taaruf Online' }}
              />
              <Stack.Screen name="Cv" component={CvScreen} options={{ headerTitle: 'CV' }} />
            </Stack.Navigator>
          </NavigationContainer>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  )
}
