import { Button } from '@/components'
import { usePaddingBottom } from '@/hooks'
import { Colors, commonStyles, typography } from '@/styles'
import { Screen } from '@/types'
import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginScreen: Screen<'Login'> = ({ navigation }) => {
  const paddingBottom = usePaddingBottom()

  const [phone, setPhone] = useState('081327552848')
  const [password, setPassword] = useState('password1234')

  return (
    <SafeAreaView edges={['left', 'right']} style={[commonStyles.background, commonStyles.flex]}>
      <ScrollView contentContainerStyle={[commonStyles.flexGrow, commonStyles.pagePadding]}>
        <Text style={typography.heading2}>Silakan Log In dengan Akun Kamu</Text>
        <View style={[commonStyles.flex, commonStyles.columnCenterV, commonStyles.gap]}>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Nomor Hp</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik nomor hp"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              defaultValue={phone}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Password</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik password"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              secureTextEntry
              onChangeText={setPassword}
              defaultValue={password}
            />
          </View>
          <View style={[commonStyles.rowCenterV, commonStyles.smallGap]}>
            <Text style={typography.heading4}>Belum punya akun?</Text>
            <Button
              text="Buat CV"
              type="text"
              props={{
                onPress: () => {
                  navigation.navigate('CreateCv')
                },
              }}
            />
          </View>
        </View>
      </ScrollView>
      <View style={[commonStyles.containerBottomButton, paddingBottom]}>
        <Button
          text="Log in"
          props={{
            onPress: () => {
              navigation.replace('BottomBar')
            },
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export { LoginScreen }
