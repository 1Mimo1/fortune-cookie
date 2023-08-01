import { useState } from 'react'
import './App.css'
import phrases from "./db/phrases.json"
import { randomPhrase } from './utils/random'
import QuoteBox from './components/QuoteBox'
import './components/QuoteBox.css'

const backgroundArr = ['cookie1', 'cookie2', 'cookie3', 'cookie4']

function App() {
  const [phrase, setPhrase] = useState(randomPhrase(phrases))
  const [currentBackground, setBackground] = useState(randomPhrase(backgroundArr))
  const handleChangePhrase = () => {
    setPhrase(randomPhrase(phrases))
    setBackground(randomPhrase(backgroundArr))
  }
  return (
    <main className= {`App ${currentBackground}`}>
      <QuoteBox handleChangePhrase={handleChangePhrase} phrase={phrase}/>
    </main>
  )
}

export default App
