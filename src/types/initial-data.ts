import { SmallOpponent } from './shared-types'

const initialOpponent: SmallOpponent = {
  about:
    'Seorang yang berasal dari keluarga menengah. Punya kemauan untuk belajar hal baru, dan memperbaiki diri. Insyaallah baik dan jujur. Menginginkan partner yang bisa diajak tumbuh bersama dan saling menerima kelebihan dan kekurangan masing-masing.',
  address: 'Jl. Laksda Adisucipto No.16, Gajahmungkur, Semarang',
  age: 25,
  city: 'Semarang',
  code: 'AGC642',
  criteria:
    'Saya mencari pasangan yang sederhana dan memiliki pemahaman agama yang cukup, tetapi juga mampu bersikap fleksibel dalam keseharian. Seseorang yang saling mendukung dalam menghadapi kesulitan hidup, baik dari sisi ekonomi maupun keluarga, dan memiliki rasa hormat terhadap orang tua.',
  gender: 'Wanita',
  height: 173,
  image: 'https://picsum.photos/id/237/200/300',
  job: 'Guru Sekolah Dasar (SD)',
  name: 'Jane Doe',
  question1:
    'Apa visi dan tujuan utama Anda dalam berumah tangga, dan bagaimana Anda melihat peran masing-masing dalam mencapai tujuan tersebut?',
  question2:
    'Bagaimana pandangan Anda mengenai pengelolaan keuangan dalam keluarga dan tanggung jawab ekonomi dari masing-masing pihak?',
  question3:
    'Bagaimana Anda memprioritaskan keluarga besar dalam kehidupan pernikahan, dan sejauh mana keterlibatan mereka dalam urusan keluarga inti kita nanti?',
  status: 'Lajang',
  superiority: 'Jujur, Sabar, Mudah Paham',
  vision:
    'Saya ingin menikah untuk berbagi suka dan duka dalam kehidupan sehari-hari, membangun keluarga yang sederhana dan penuh kebahagiaan. Menjalani kehidupan berumah tangga yang saling menguatkan, terutama dalam menghadapi tantangan ekonomi dan mendidik anak-anak agar memiliki iman dan karakter yang baik.',
  weakness: 'Mudah Panik, Anxiety',
  weight: 63,
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
