import { PeopleCard } from '@/components'
import { getRandomCode, getRandomImage, initialOpponent, SmallOpponent } from '@/types'
import React from 'react'
import { FlatList, ListRenderItemInfo, SafeAreaView, StyleSheet } from 'react-native'

const data: SmallOpponent[] = Array.from({ length: 7 }, () => ({
  ...initialOpponent,
  image: getRandomImage(initialOpponent.image),
  code: getRandomCode(),
}))

const ReceivedScreen = () => {
  const renderItem = ({ item }: ListRenderItemInfo<SmallOpponent>) => {
    return <PeopleCard item={item} openedFrom="received" />
  }

  return (
    <SafeAreaView style={style.root}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(_item, index) => index.toString()}
        horizontal={false}
        numColumns={2}
        columnWrapperStyle={style.columWrapper}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  columWrapper: {
    gap: 10,
    paddingLeft: 10,
  },

  root: {
    flex: 1,
  },
})

export { ReceivedScreen }
