import { Button } from '@/components'
import { usePaddingBottom } from '@/hooks'
import { Colors, commonStyles, typography } from '@/styles'
import { Screen, strings } from '@/types'
import SegmentedControl from '@react-native-segmented-control/segmented-control'
import { CommonActions } from '@react-navigation/native'
import { Image } from 'expo-image'
import React, { useState } from 'react'
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const CreateCvScreen: Screen<'CreateCv'> = ({ navigation }) => {
  const paddingBottom = usePaddingBottom()

  const [genderIndex, setGenderIndex] = useState(0)
  const [statusIndex, setStatusIndex] = useState(0)
  const [name, setName] = useState('Wicak Radityo')
  const [phone, setPhone] = useState('081327552848')
  const [photo, setPhoto] = useState('')
  const [age, setAge] = useState('')
  const [job, setJob] = useState('')
  const [city, setCity] = useState('')
  const [address, setAddress] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [aboutMe, setAboutMe] = useState('')
  const [superiority, setSuperiority] = useState('')
  const [weakness, setWeakness] = useState('')
  const [vision, setVision] = useState('')
  const [criteria, setCriteria] = useState('')
  const [password, setPassword] = useState('password1234')
  const [question1, setQuestion1] = useState('')
  const [question2, setQuestion2] = useState('')
  const [question3, setQuestion3] = useState('')

  return (
    <SafeAreaView edges={['left', 'right']} style={[commonStyles.background, commonStyles.flex]}>
      <ScrollView contentContainerStyle={[commonStyles.flexGrow, commonStyles.pagePadding]}>
        <View style={[commonStyles.flex, commonStyles.columnCenterV, commonStyles.gap]}>
          <Text style={typography.heading2}>Silakan Buat CV Kamu</Text>
          <View />
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Nama</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik nama"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              style={commonStyles.textInput}
              onChangeText={setName}
              autoCapitalize="words"
              defaultValue={name}
            />
          </View>
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
            <Text style={typography.heading4}>Jenis Kelamin</Text>
            <SegmentedControl
              values={['Laki-laki', 'Perempuan']}
              selectedIndex={genderIndex}
              onChange={(event) => {
                setGenderIndex(event.nativeEvent.selectedSegmentIndex)
              }}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Status</Text>
            <SegmentedControl
              values={genderIndex === 0 ? ['Lajang', 'Menikah', 'Duda'] : ['Lajang', 'Janda']}
              selectedIndex={statusIndex}
              onChange={(event) => {
                setStatusIndex(event.nativeEvent.selectedSegmentIndex)
              }}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Foto</Text>
            <TouchableOpacity
              style={style.imageButton}
              onPress={() => {
                setPhoto('https://picsum.photos/id/12/500/200')
              }}>
              {photo ? (
                <Image source={photo} style={commonStyles.wh100Percent} />
              ) : (
                <Text>Upload foto wajah kamu</Text>
              )}
            </TouchableOpacity>
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Umur</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik umur"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              onChangeText={setAge}
              keyboardType="numeric"
              defaultValue={age}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Pekerjaan</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik pekerjaan"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              onChangeText={setJob}
              defaultValue={job}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Kota Domisili</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik kota domisili"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              onChangeText={setCity}
              defaultValue={city}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Alamat Domisili</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik alamat domisili kamu"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              onChangeText={setAddress}
              defaultValue={address}
            />
            <Text style={[typography.heading5, typography.lowEmphasize]}>
              *Hanya kamu yang dapat melihat data ini
            </Text>
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Tinggi Badan</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik tinggi badan"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              onChangeText={setHeight}
              defaultValue={height}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Berat Badan</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik berat badan"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              style={commonStyles.textInput}
              onChangeText={setWeight}
              defaultValue={weight}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Tentang Kamu</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik tentang diri kamu"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              multiline
              numberOfLines={4}
              style={commonStyles.multilineInput}
              onChangeText={setAboutMe}
              defaultValue={aboutMe}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Kelebihan</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik kelebihan kamu"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              multiline
              numberOfLines={4}
              style={commonStyles.multilineInput}
              onChangeText={setSuperiority}
              defaultValue={superiority}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Kekurangan</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik kekurangan kamu"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              multiline
              numberOfLines={4}
              style={commonStyles.multilineInput}
              onChangeText={setWeakness}
              defaultValue={weakness}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Visi Nikah</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik visi nikah kamu"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              multiline
              numberOfLines={4}
              style={commonStyles.multilineInput}
              onChangeText={setVision}
              defaultValue={vision}
            />
          </View>
          <View style={commonStyles.smallGap}>
            <Text style={typography.heading4}>Kriteria Pasangan</Text>
            <TextInput
              cursorColor={Colors.dodgerBlue}
              placeholder="Ketik kriteria pasangan yang kamu harapkan"
              placeholderTextColor={Colors.black34}
              selectionColor={Colors.dodgerBlue}
              returnKeyType="default"
              multiline
              numberOfLines={4}
              style={commonStyles.multilineInput}
              onChangeText={setCriteria}
              defaultValue={criteria}
            />
          </View>
          <>
            <View style={commonStyles.smallGap}>
              <Text style={typography.heading4}>Pertanyaan 1</Text>
              <TextInput
                cursorColor={Colors.dodgerBlue}
                placeholder="Ketik pertanyaan untuk calon"
                placeholderTextColor={Colors.black34}
                selectionColor={Colors.dodgerBlue}
                returnKeyType="default"
                multiline
                numberOfLines={4}
                style={commonStyles.multilineInput}
                onChangeText={setQuestion1}
                defaultValue={question1}
              />
            </View>
            <View style={commonStyles.smallGap}>
              <Text style={typography.heading4}>Pertanyaan 2</Text>
              <TextInput
                cursorColor={Colors.dodgerBlue}
                placeholder="Ketik pertanyaan untuk calon"
                placeholderTextColor={Colors.black34}
                selectionColor={Colors.dodgerBlue}
                returnKeyType="default"
                multiline
                numberOfLines={4}
                style={commonStyles.multilineInput}
                onChangeText={setQuestion2}
                defaultValue={question2}
              />
            </View>
            <View style={commonStyles.smallGap}>
              <Text style={typography.heading4}>Pertanyaan 3</Text>
              <TextInput
                cursorColor={Colors.dodgerBlue}
                placeholder="Ketik pertanyaan untuk calon"
                placeholderTextColor={Colors.black34}
                selectionColor={Colors.dodgerBlue}
                returnKeyType="default"
                multiline
                numberOfLines={4}
                style={commonStyles.multilineInput}
                onChangeText={setQuestion3}
                defaultValue={question3}
              />
            </View>
          </>
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
          <View />
          <View />
        </View>
      </ScrollView>
      <View style={[commonStyles.containerBottomButton, paddingBottom]}>
        <Button
          text="Buat CV"
          props={{
            onPress: () => {
              Alert.alert('Buat CV', strings.createCvInfo, [
                { style: 'cancel', text: 'Batal' },
                {
                  isPreferred: true,
                  text: 'Buat CV',
                  onPress() {
                    Alert.alert('Berhasil Membuat CV', 'Kamu bisa langsung log in', [
                      {
                        text: 'Log In',
                        onPress() {
                          navigation.dispatch(
                            CommonActions.reset({
                              routes: [{ name: 'BottomBar' }],
                              index: 0,
                            })
                          )
                        },
                      },
                    ])
                  },
                },
              ])
            },
          }}
        />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  imageButton: {
    ...commonStyles.borderLine,
    ...commonStyles.borderRadius,
    ...commonStyles.columnCenter,
    borderWidth: 1,
    height: 120,
    overflow: 'hidden',
    width: '100%',
  },
})

export { CreateCvScreen }
