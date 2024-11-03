import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { BottomBarScreen } from '@/screens'
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <KeyboardProvider>
        <NavigationContainer
          onStateChange={(state) => {
            console.log('CURRENT SCREEN:', state?.routes[state.index].name)
          }}>
          <Stack.Navigator>
            <Stack.Screen name="BottomBar" component={BottomBarScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}
