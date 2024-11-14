import { SmallOpponent } from './shared-types'

const opponentQuestion = Object.freeze({
  first: 'Seperti apa pandanganmu tentang peran saling mendukung dalam rumah tangga?',
  second: 'Bagaimana kamu melihat peran komunikasi dalam menyelesaikan masalah keluarga?',
  third: 'Seberapa penting menurutmu menjaga hubungan baik dengan keluarga besar?',
})
const userAnswer = Object.freeze({
  first:
    'Menurut saya, saling mendukung dalam rumah tangga berarti kita selalu ada untuk membantu, baik dalam urusan sehari-hari maupun saat menghadapi masalah. Saya ingin memastikan kita tumbuh bersama dan saling menguatkan, terutama di saat-saat sulit.',
  second:
    'Komunikasi yang jujur dan terbuka sangat penting. Dengan berbicara dan mendengarkan satu sama lain tanpa asumsi, kita bisa menghindari banyak kesalahpahaman. Saya ingin menjaga suasana yang nyaman agar kita berdua merasa bebas untuk berbagi pikiran.',
  third:
    'Menjaga hubungan baik dengan keluarga besar adalah bentuk rasa hormat dan dukungan. Saya akan berusaha melibatkan mereka dengan sewajarnya tanpa melupakan batasan dan privasi rumah tangga kita.',
})

const userQuestion = Object.freeze({
  first:
    'Apa yang paling kamu harapkan dari pasangan dalam perjalanan rumah tangga, dan bagaimana kita bisa bekerja sama untuk mewujudkan harapan tersebut?',
  second:
    'Dalam menghadapi tantangan hidup, apakah ada cara khusus yang kamu nilai penting untuk menjaga keharmonisan rumah tangga kita?',
  third:
    'Bagaimana kamu melihat peran keluarga besar dalam kehidupan pernikahan kita, dan sejauh mana kamu ingin melibatkan mereka dalam keseharian kita?',
})
const opponentAnswer = Object.freeze({
  first:
    'Harapan utama saya dari pasangan adalah adanya kebersamaan dan saling mendukung dalam segala kondisi. Bagi saya, penting untuk bisa menjadi teman dalam hal-hal kecil sehari-hari, sehingga kita selalu merasa punya tim dalam hidup.',
  second:
    'Saya percaya komunikasi adalah kunci utama dalam menjaga keharmonisan. Ketika ada tantangan atau perbedaan pendapat, saya berharap kita bisa membahasnya dengan tenang tanpa saling menyalahkan, serta saling menghargai setiap pandangan.',
  third:
    'Keluarga besar tentunya penting, namun saya berharap ada batasan yang jelas dalam urusan pribadi kita. Saya ingin mereka merasa dihormati, tetapi juga memberi kita ruang untuk menjalani kehidupan sesuai kesepakatan kita sendiri.',
})

const initialOpponent: SmallOpponent = {
  about:
    'Saya berasal dari keluarga menengah yang sederhana. Memiliki keinginan untuk terus belajar dan memperbaiki diri. Insyaallah pribadi yang sabar dan berusaha menjadi orang yang baik. Mengharapkan pasangan yang bisa diajak tumbuh bersama dan saling menerima kelebihan serta kekurangan masing-masing.',
  address: 'Jl. Laksda Adisucipto No.16, Gajahmungkur, Semarang',
  age: 25,
  city: 'Semarang',
  code: 'CSA642',
  criteria:
    'Saya mencari pasangan yang sederhana namun memiliki pemahaman agama yang baik, dan mampu bersikap fleksibel dalam keseharian. Seseorang yang tetap bisa membimbing dalam suka dan duka, baik dari sisi ekonomi maupun dukungan keluarga, serta memiliki rasa hormat terhadap orang tua dan lingkungan sekitar.',
  gender: 'Wanita',
  height: 165,
  image: 'https://picsum.photos/id/238/200/300',
  job: 'Guru Sekolah Dasar (SD)',
  name: 'Jane Doe',
  answer: {
    first: opponentAnswer.first,
    second: opponentAnswer.second,
    third: opponentAnswer.third,
  },
  question: {
    first: opponentQuestion.first,
    second: opponentQuestion.second,
    third: opponentQuestion.third,
  },
  status: 'Lajang',
  superiority: 'Jujur, Sabar, Cepat Paham',
  vision:
    'Saya ingin menikah untuk berbagi suka dan duka dalam kehidupan sehari-hari, membangun keluarga yang sederhana namun bahagia. Menjalani rumah tangga yang saling mendukung, terutama dalam menghadapi tantangan ekonomi dan membimbing anak-anak untuk memiliki iman serta karakter yang baik.',
  weakness: 'Mudah Panik, Cemas Berlebihan',
  weight: 58,
}

const initialUser: SmallOpponent = {
  about:
    'Pria yang berasal dari keluarga sederhana, punya semangat untuk selalu belajar dan memperbaiki diri. Insyaallah bertanggung jawab dan berusaha menjadi pribadi yang baik. Menginginkan pasangan yang bisa diajak tumbuh bersama dan saling menghargai kelebihan serta kekurangan masing-masing.',
  address: 'Jl. Diponegoro No.20, Tembalang, Semarang',
  age: 27,
  city: 'Semarang',
  code: 'GPR215',
  criteria:
    'Saya mencari pasangan yang tulus dan memiliki nilai-nilai keagamaan yang baik, namun tetap terbuka dan fleksibel dalam menjalani kehidupan sehari-hari. Seseorang yang mampu berjuang bersama dalam menghadapi tantangan hidup, termasuk dalam hal ekonomi dan keluarga besar, serta memiliki rasa hormat kepada orang tua.',
  gender: 'Pria',
  height: 178,
  image: 'https://picsum.photos/id/12/200/300',
  job: 'Pemadam Kebakaran (Damkar)',
  name: 'John Doe',
  answer: {
    first: userAnswer.first,
    second: userAnswer.second,
    third: userAnswer.third,
  },
  question: {
    first: userQuestion.first,
    second: userQuestion.second,
    third: userQuestion.third,
  },
  status: 'Lajang',
  superiority: 'Tegas, Mudah Beradaptasi, Rajin',
  vision:
    'Saya ingin menikah untuk saling mendukung dalam berbagai aspek kehidupan, membangun keluarga yang harmonis dan berlandaskan nilai-nilai agama. Berharap bisa menjalani rumah tangga yang stabil dan saling mendukung terutama dalam mendidik anak-anak agar menjadi pribadi yang baik dan berakhlak mulia.',
  weakness: 'Terkadang Kurang Sabar, Kadang Cenderung Terlalu Fokus pada Pekerjaan',
  weight: 72,
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

export {
  getRandomCode,
  getRandomImage,
  getRandomNumber,
  initialOpponent,
  initialUser,
  opponentAnswer,
  opponentQuestion,
  userAnswer,
  userQuestion,
}
