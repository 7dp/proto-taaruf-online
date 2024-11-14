type SmallOpponent = {
  about: string
  address: string
  age: number
  city: string
  code: string
  criteria: string
  gender: 'Pria' | 'Wanita'
  height: number
  image: string
  job: string
  name: string
  question: {
    first: string
    second: string
    third: string
  }
  answer: {
    first: string
    second: string
    third: string
  }
  status: 'Menikah' | 'Lajang' | 'Duda' | 'Janda'
  superiority: string
  vision: string
  weakness: string
  weight: number
}

export { SmallOpponent }
