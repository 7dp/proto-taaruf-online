import { Button, KeyValueText } from '@/components'
import { usePaddingBottom } from '@/hooks'
import { Colors, commonStyles, typography } from '@/styles'
import { initialUser, Screen, strings } from '@/types'
import { Image } from 'expo-image'
import React, { useEffect } from 'react'
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const MatchScreen: Screen<'Match'> = ({ navigation, route }) => {
  const { opponent } = route.params

  const paddingBottom = usePaddingBottom()
  const user = initialUser

  useEffect(() => {
    const renderHeaderRight = () => {
      return (
        <TouchableOpacity
          onPress={() => {
            const url = `https://wa.me/628156502510/?text=Saya%20ikhwan/akhwat%20atas%20nama%20...%20Saat%20ini%20sedang%20match%20dg%20ikhwan/akhwat%20kode%20...`
            Linking.openURL(url)
          }}>
          <Text style={[typography.heading4, typography.semibold, typography.blue]}>WA Admin</Text>
        </TouchableOpacity>
      )
    }

    navigation.setOptions({
      headerTitle: `Match dgn ${opponent.code}`,
      headerBackTitleVisible: false,
      headerRight: renderHeaderRight,
    })
  }, [navigation, opponent.code])

  const renderAnswer = () => {
    return (
      <>
        <Text style={[typography.heading3, typography.semibold]}>
          Jawaban Calon atas Pertanyaanmu
        </Text>
        <KeyValueText title="Pertanyaan 1" value={user.question.first} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Calon</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            editable={false}
            multiline
            numberOfLines={4}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            value={opponent.answer.first}
          />
        </View>
        <KeyValueText title="Pertanyaan 2" value={user.question.second} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Calon</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            editable={false}
            multiline
            numberOfLines={4}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            value={opponent.answer.second}
          />
        </View>
        <KeyValueText title="Pertanyaan 3" value={user.question.third} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Calon</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            editable={false}
            multiline
            numberOfLines={4}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            value={opponent.answer.third}
          />
        </View>
      </>
    )
  }

  const renderQuestion = () => {
    return (
      <>
        <Text style={[typography.heading3, typography.semibold]}>
          Jawabanmu atas Pertanyaan Calon
        </Text>
        <KeyValueText title="Pertanyaan 1" value={opponent.question.first} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Kamu</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            editable={false}
            multiline
            numberOfLines={4}
            placeholder="Ketik jawabanmu"
            placeholderTextColor={Colors.black34}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            value={user.answer.first}
          />
        </View>
        <KeyValueText title="Pertanyaan 2" value={opponent.question.second} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Kamu</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            editable={false}
            multiline
            numberOfLines={4}
            placeholder="Ketik jawabanmu"
            placeholderTextColor={Colors.black34}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            value={user.answer.second}
          />
        </View>
        <KeyValueText title="Pertanyaan 3" value={opponent.question.third} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Kamu</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            editable={false}
            multiline
            numberOfLines={4}
            placeholder="Ketik jawabanmu"
            placeholderTextColor={Colors.black34}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            value={user.answer.third}
          />
        </View>
      </>
    )
  }

  const renderMainButton = () => {
    const rejectNadzor = () => {
      Alert.alert('Tolak Tahap Nadzor?', 'Tolak jika kamu tidak merasa cocok dengan calon', [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Tolak',
          style: 'destructive',
          onPress() {
            navigation.pop()
          },
        },
      ])
    }
    const approveNadzor = () => {
      Alert.alert(
        'Setuju Melangkah ke Tahap Nadzor?',
        'Nadzor akan ditemani dan diawasi oleh mitra dari pihak Taaruf Online',
        [
          {
            text: 'Batal',
            style: 'cancel',
          },
          {
            text: 'Setuju',
            isPreferred: true,
            onPress() {
              navigation.navigate('Nadzor', { opponent })
            },
          },
        ]
      )
    }
    return (
      <View
        style={[
          commonStyles.containerBottomButton,
          commonStyles.gap,
          commonStyles.row,
          paddingBottom,
        ]}>
        <Button
          text="Tolak Nadzor"
          props={{ onPress: rejectNadzor, style: commonStyles.flex }}
          type="outline"
        />
        <Button text="Setuju Nadzor" props={{ onPress: approveNadzor, style: commonStyles.flex }} />
      </View>
    )
  }

  return (
    <SafeAreaView edges={['left', 'right']} style={commonStyles.flex}>
      <ScrollView contentContainerStyle={[commonStyles.flexGrow, commonStyles.pagePadding]}>
        <View style={style.container}>
          <View style={style.hint}>
            <Text style={[typography.heading4, commonStyles.flex]}>{strings.hintWaMatch}</Text>
          </View>
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
          <View style={style.card}>{renderAnswer()}</View>
          <View style={style.card}>{renderQuestion()}</View>
        </View>
      </ScrollView>
      {renderMainButton()}
    </SafeAreaView>
  )
}

const hintBg = '#bfd8ff'

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
  hint: {
    backgroundColor: hintBg,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  image: {
    aspectRatio: 2 / 3,
    borderRadius: 8,
    width: 150,
  },
})

export { MatchScreen }
