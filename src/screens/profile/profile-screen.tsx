import { Button, KeyValueText } from '@/components'
import { useNavigation, usePaddingBottom } from '@/hooks'
import { Colors, commonStyles, typography } from '@/styles'
import { initialUser } from '@/types'
import { CommonActions } from '@react-navigation/native'
import { Image } from 'expo-image'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ProfileScreen = () => {
  const user = initialUser
  const navigation = useNavigation()
  const paddingBottom = usePaddingBottom()

  return (
    <SafeAreaView
      edges={['left', 'right', 'bottom']}
      style={[commonStyles.background, commonStyles.flex]}>
      <ScrollView contentContainerStyle={[style.scrollView, paddingBottom]}>
        <View style={style.container}>
          <View style={[commonStyles.columnCenterH, commonStyles.gap]}>
            <Image source={user.image} style={style.image} />
            <View style={commonStyles.columnCenterH}>
              <Text style={[typography.heading2, typography.semibold]}>{user.name}</Text>
              <Text style={[typography.heading4, typography.semibold]}>{user.code}</Text>
              <Text style={typography.heading4}>{user.age} tahun</Text>
            </View>
          </View>
          <View style={style.card}>
            <KeyValueText title="Status" value={user.status} />
            <KeyValueText title="Kota Domisili" value={user.city} />
            <KeyValueText title="Alamat Domisili" value={user.address} />
            <KeyValueText title="Pekerjaan" value={user.job} />
            <KeyValueText title="Tentang Saya" value={user.about} />
            <KeyValueText
              title="Tinggi/Berat Badan"
              value={`${user.height}cm / ${user.weight}kg`}
            />
            <KeyValueText title="Kelebihan Diri" value={user.superiority} />
            <KeyValueText title="Kekurangan Diri" value={user.weakness} />
            <KeyValueText title="Visi Nikah" value={user.vision} />
            <KeyValueText title="Kriteria Pasangan" value={user.criteria} />
          </View>
          <View style={style.card}>
            <Text style={[typography.heading3, typography.semibold]}>Pertanyaan Untuk Calon</Text>
            <KeyValueText title="Pertanyaan 1" value={user.question.first} />
            <KeyValueText title="Pertanyaan 2" value={user.question.second} />
            <KeyValueText title="Pertanyaan 3" value={user.question.third} />
          </View>
          <Button
            text="Log Out"
            type="text"
            props={{
              onPress: () => {
                navigation.dispatch(
                  CommonActions.reset({
                    routes: [{ name: 'Login' }],
                    index: 0,
                  })
                )
              },
            }}
            textProps={{ style: typography.error }}
          />
          <View />
          <View />
          <View />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  card: {
    ...commonStyles.gap,
    backgroundColor: Colors.white,
    borderRadius: 8,
    margin: 12,
    padding: 16,
    shadowColor: Colors.black05,
    shadowOffset: { height: 3, width: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  container: {
    ...commonStyles.flex,
    ...commonStyles.gap,
  },
  image: {
    aspectRatio: 2 / 3,
    borderRadius: 8,
    width: 150,
  },

  scrollView: {
    backgroundColor: Colors.brightGray,
    ...commonStyles.flexGrow,
    ...commonStyles.pagePadding,
  },
})

export { ProfileScreen }
