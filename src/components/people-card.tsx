import { useNavigation } from '@/hooks'
import { Colors, commonStyles, typography, windowWidth } from '@/styles'
import { SmallOpponent } from '@/types'
import { Image } from 'expo-image'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const width = windowWidth / 2 - 15
const height = Math.round((width / 3) * 4)

type Props = {
  item: SmallOpponent
}

function PeopleCard(props: Props) {
  const { image, code, age, city } = props.item

  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('Cv', { opponent: props.item })
  }

  return (
    <TouchableOpacity style={style.root} onPress={onPress}>
      <Image source={image} style={style.image} />
      {/* Layer above image */}
      <View style={style.layerAbove}>
        <View style={style.expander}>
          <View style={style.containerText}>
            <Text
              numberOfLines={1}
              style={[typography.heading3, typography.semibold, typography.white]}>
              {code}
              {', '}
              <Text numberOfLines={1} style={[typography.heading4, typography.white]}>
                {age} tahun
              </Text>
            </Text>
            <Text numberOfLines={2} style={[typography.heading4, typography.white]}>
              Domisili: {city}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  containerText: {
    backgroundColor: Colors.black25,
    gap: 4,
    padding: 12,
  },

  expander: {
    ...commonStyles.flex,
    justifyContent: 'flex-end',
  },

  image: {
    borderRadius: 8,
    height,
    width,
  },

  layerAbove: {
    ...commonStyles.absolute,
    justifyContent: 'flex-end',
  },

  root: {
    borderRadius: 8,
    height,
    marginTop: 10,
    width,
  },
})

export { PeopleCard }
