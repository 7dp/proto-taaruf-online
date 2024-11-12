import { KeyValueText } from '@/components'
import { Colors, commonStyles, typography } from '@/styles'
import { Screen } from '@/types'
import { Image } from 'expo-image'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CvScreen: Screen<'Cv'> = ({ route }) => {
  const { opponent } = route.params

  return (
    <SafeAreaView edges={['left', 'right']} style={commonStyles.flex}>
      <ScrollView contentContainerStyle={[commonStyles.flexGrow, commonStyles.pagePadding]}>
        <View style={style.container}>
          <View style={[commonStyles.columnCenterH, commonStyles.gap]}>
            <Image source={opponent.image} style={style.image} />
            <View>
              <Text style={[typography.heading2, typography.semibold]}>{opponent.code}</Text>
              <Text style={typography.heading4}>{opponent.age} tahun</Text>
            </View>
          </View>
          <View style={style.card}>
            <KeyValueText title="Status" value={opponent.status} />
            <KeyValueText title="Kota Domisili" value={opponent.city} />
            <KeyValueText title="Pekerjaan" value={opponent.job} />
            <KeyValueText title="Tentang Saya" value={opponent.about} />
            <KeyValueText
              title="Tinggi/Berat Badan"
              value={`${opponent.height}cm / ${opponent.weight}kg`}
            />
            <KeyValueText title="Kelebihan Diri" value={opponent.superiority} />
            <KeyValueText title="Kekurangan Diri" value={opponent.weakness} />
            <KeyValueText title="Visi Nikah" value={opponent.vision} />
            <KeyValueText title="Kriteria Pasangan" value={opponent.criteria} />
          </View>
          <View style={style.card}>
            <Text style={[typography.heading3, typography.semibold]}>Pertanyaan Untuk Calon</Text>
            <KeyValueText title="Pertanyaan 1" value={opponent.question1} />
            <KeyValueText title="Pertanyaan 2" value={opponent.question2} />
            <KeyValueText title="Pertanyaan 3" value={opponent.question3} />
          </View>
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
})

export { CvScreen }
