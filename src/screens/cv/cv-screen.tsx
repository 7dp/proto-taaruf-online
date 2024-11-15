import { Button, KeyValueText } from '@/components'
import { usePaddingBottom } from '@/hooks'
import { Colors, commonStyles, typography } from '@/styles'
import { initialUser, Screen, userAnswer } from '@/types'
import { Image } from 'expo-image'
import React, { useEffect, useState } from 'react'
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CvScreen: Screen<'Cv'> = ({ navigation, route }) => {
  const { opponent, openedFrom } = route.params
  const isOpenedFromSent = openedFrom === 'sent'
  const isOpenedFromReceived = openedFrom === 'received'

  const paddingBottom = usePaddingBottom()
  const user = initialUser

  const [firstAnswer, setFirstAnswer] = useState(isOpenedFromSent ? userAnswer.first : '')
  const [secondAnswer, setSecondAnswer] = useState(isOpenedFromSent ? userAnswer.second : '')
  const [thirdAnswer, setThirdAnswer] = useState(isOpenedFromSent ? userAnswer.third : '')

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: isOpenedFromSent ? 'Terkirim' : isOpenedFromReceived ? 'Masuk' : 'Back',
    })
  }, [isOpenedFromReceived, isOpenedFromSent, navigation])

  const renderAnswer = () => {
    if (isOpenedFromReceived) {
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
    return null
  }

  const renderQuestion = () => {
    if (isOpenedFromSent) {
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
              onChangeText={setFirstAnswer}
              value={firstAnswer}
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
              onChangeText={setSecondAnswer}
              value={secondAnswer}
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
              onChangeText={setThirdAnswer}
              value={thirdAnswer}
            />
          </View>
        </>
      )
    }
    return (
      <>
        <Text style={[typography.heading3, typography.semibold]}>
          Silakan Jawab Pertanyaan Calon
        </Text>
        <KeyValueText title="Pertanyaan 1" value={opponent.question.first} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Kamu</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            multiline
            numberOfLines={4}
            placeholder="Ketik jawabanmu"
            placeholderTextColor={Colors.black34}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            onChangeText={setFirstAnswer}
            value={firstAnswer}
          />
        </View>
        <KeyValueText title="Pertanyaan 2" value={opponent.question.second} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Kamu</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            multiline
            numberOfLines={4}
            placeholder="Ketik jawabanmu"
            placeholderTextColor={Colors.black34}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            onChangeText={setSecondAnswer}
            value={secondAnswer}
          />
        </View>
        <KeyValueText title="Pertanyaan 3" value={opponent.question.third} />
        <View style={commonStyles.smallGap}>
          <Text style={[typography.heading4, typography.description]}>Jawaban Kamu</Text>
          <TextInput
            cursorColor={Colors.dodgerBlue}
            multiline
            numberOfLines={4}
            placeholder="Ketik jawabanmu"
            placeholderTextColor={Colors.black34}
            selectionColor={Colors.dodgerBlue}
            returnKeyType="default"
            style={commonStyles.multilineInput}
            onChangeText={setThirdAnswer}
            value={thirdAnswer}
          />
        </View>
      </>
    )
  }

  const renderMainButton = () => {
    if (isOpenedFromSent) return null

    if (isOpenedFromReceived) {
      const approveCv = () => {
        if (!firstAnswer.trim() || !secondAnswer.trim() || !thirdAnswer.trim()) {
          Alert.alert('Semua pertanyaan calon harus kamu jawab')
          return
        }
        Alert.alert(
          `Berhasil menerima CV dari ${opponent.code}!`,
          'Tahap selanjutnya adalah nadzor',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.pop()
              },
            },
          ]
        )
      }

      return (
        <View style={[commonStyles.containerBottomButton, paddingBottom]}>
          <Button text="Terima CV" props={{ onPress: approveCv }} />
        </View>
      )
    }

    const sendCv = () => {
      if (!firstAnswer.trim() || !secondAnswer.trim() || !thirdAnswer.trim()) {
        Alert.alert('Semua pertanyaan calon harus kamu jawab')
        return
      }
      Alert.alert(
        `Berhasil mengajukan CV ke ${opponent.code}`,
        'Riwayat pengajuanmu dapat dilihat di menu Terkirim',
        [
          {
            text: 'OK',
            onPress: () => {
              navigation.pop()
            },
          },
        ]
      )
    }

    return (
      <View style={[commonStyles.containerBottomButton, paddingBottom]}>
        <Button text="Ajukan CV" props={{ onPress: sendCv }} />
      </View>
    )
  }

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
          {isOpenedFromReceived && <View style={style.card}>{renderAnswer()}</View>}
          <View style={style.card}>{renderQuestion()}</View>
        </View>
      </ScrollView>
      {renderMainButton()}
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
