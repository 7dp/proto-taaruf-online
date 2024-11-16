import { Button } from '@/components'
import { usePaddingBottom } from '@/hooks'
import { Colors, commonStyles, typography } from '@/styles'
import { Screen } from '@/types'
import { Image } from 'expo-image'
import React, { useEffect, useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const KhitbahScreen: Screen<'Khitbah'> = ({ navigation, route }) => {
  const { opponent } = route.params

  const paddingBottom = usePaddingBottom()

  const [isDeactivated, setIsDeactivated] = useState(false)

  useEffect(() => {
    navigation.setOptions({
      headerTitle: 'Taaruf Selesai',
      headerBackTitleVisible: false,
    })
  }, [navigation])

  const renderMainButton = () => {
    if (isDeactivated) {
      return (
        <View style={[style.containerMainButton, paddingBottom]}>
          <Text style={[typography.heading4, typography.lowEmphasize]}>
            Akun telah dinonaktifkan
          </Text>
        </View>
      )
    }
    const deactivate = () => {
      setIsDeactivated(true)
      Alert.alert('Akun Berhasil Dinonaktifkan', undefined, [
        {
          text: 'OK',
          style: 'default',
        },
      ])
    }
    return (
      <View
        style={[
          commonStyles.containerBottomButton,
          commonStyles.gap,
          commonStyles.row,
          paddingBottom,
        ]}>
        <Button text="Nonaktifkan Akun" props={{ onPress: deactivate, style: commonStyles.flex }} />
      </View>
    )
  }

  return (
    <SafeAreaView edges={['left', 'right']} style={style.root}>
      <View style={commonStyles.flex}>
        <View style={[commonStyles.flex, commonStyles.columnCenter, commonStyles.gap]}>
          <Image source={opponent.image} style={style.image} />
          <View>
            <Text style={[typography.heading2, typography.semibold]}>{opponent.code}</Text>
            <Text style={typography.heading4}>{opponent.age} tahun</Text>
          </View>
        </View>
        <View style={style.containerText}>
          <Text style={[typography.heading2, typography.semibold]}>
            Selamat! Semoga dilancarkan di tahap khitbah.
          </Text>
          <Text style={typography.heading4}>Salam, Tim Taaruf Online.</Text>
        </View>
      </View>
      {renderMainButton()}
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  containerMainButton: {
    ...commonStyles.containerBottomButton,
    ...commonStyles.gap,
    ...commonStyles.columnCenter,
    ...commonStyles.row,
    width: '100%',
  },
  containerText: { ...commonStyles.smallGap, flex: 0.5 },
  image: {
    aspectRatio: 2 / 3,
    borderRadius: 8,
    width: 150,
  },
  root: {
    ...commonStyles.flex,
    ...commonStyles.columnCenter,
    backgroundColor: Colors.cultured,
  },
})

export { KhitbahScreen }
