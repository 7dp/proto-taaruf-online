import React from 'react'
import { createNativeBottomTabNavigator } from 'react-native-bottom-tabs/react-navigation'
import { FindScreen } from '../find'
import { ProfileScreen } from '../profile'
import { ReceivedScreen } from '../received'
import { SentScreen } from '../sent'

const Tabs = createNativeBottomTabNavigator()

const BottomBarScreen = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="find"
        component={FindScreen}
        options={{
          title: 'Cari',
          tabBarIcon: () => ({ sfSymbol: 'magnifyingglass' }),
        }}
      />
      <Tabs.Screen
        name="sent"
        component={SentScreen}
        options={{
          title: 'Terkirim',
          tabBarIcon: () => ({ sfSymbol: 'paperplane' }),
        }}
      />
      <Tabs.Screen
        name="received"
        component={ReceivedScreen}
        options={{
          title: 'Diterima',
          tabBarIcon: () => ({ sfSymbol: 'tray.full' }),
        }}
      />
      <Tabs.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarIcon: () => ({ sfSymbol: 'person' }),
        }}
      />
    </Tabs.Navigator>
  )
}

export { BottomBarScreen }
