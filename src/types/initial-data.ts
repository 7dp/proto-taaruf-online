import { SmallOpponent } from './shared-types'

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
  question1:
    'Apa visi dan tujuan utama Anda dalam berumah tangga, dan bagaimana Anda melihat peran masing-masing dalam mencapai tujuan tersebut?',
  question2:
    'Bagaimana pandangan Anda mengenai pengelolaan keuangan dalam keluarga dan tanggung jawab ekonomi dari masing-masing pihak?',
  question3:
    'Bagaimana Anda memprioritaskan keluarga besar dalam kehidupan pernikahan, dan sejauh mana keterlibatan mereka dalam urusan keluarga inti kita nanti?',
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
  question1:
    'Apa saja nilai utama yang ingin kamu bangun bersama dalam keluarga kita nantinya, dan bagaimana cara kita bisa menjaga keseimbangan peran di rumah tangga?',
  question2:
    'Bagaimana pandanganmu tentang prioritas karir dan keluarga dalam kehidupan berumah tangga?',
  question3:
    'Menurut kamu, apa arti menjadi seorang istri yang baik, dan bagaimana kita bisa saling mendukung peran masing-masing dalam keluarga?',
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

export { getRandomCode, getRandomImage, getRandomNumber, initialOpponent, initialUser }
