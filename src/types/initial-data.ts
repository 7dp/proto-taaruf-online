import { SmallOpponent } from './shared-types'

const initialOpponent: SmallOpponent = {
  image: 'https://picsum.photos/id/237/200/300',
  code: 'AGC642',
  age: 24,
  city: 'Semarang',
}

const getRandomNumber = (range: number) => {
  return Math.floor(Math.random() * range)
}

const getRandomImage = (imageUrl: string) => {
  const id = Math.floor(Math.random() * 300)
  const newUrl = imageUrl.replace(/\/id\/\d+\//, `/id/${id}/`)
  return newUrl
}

const getRandomCode = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * letters.length)
    result += letters[randomIndex]
  }
  return `${result}${getRandomNumber(1000)}`
}

export { getRandomCode, getRandomImage, getRandomNumber, initialOpponent }
