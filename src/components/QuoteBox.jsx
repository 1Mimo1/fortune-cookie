import React from 'react'

const QuoteBox = ({handleChangePhrase, phrase}) => {
  
  return (
    <section className='quotebox'>
      <h1 className='quotebox-h1'>Fortune Cookie</h1>
      <div className='quotebox-div quotebox-div:hover'>
        <button onClick={handleChangePhrase} className='quotebox-button'>
          <h3 className='quotebox-button_h3'>Try Your Luck!</h3>
        </button>
      </div>
      <div className='quotebox-phrase'>
        <div className='quotebox-text'>
            {phrase.phrase}
        </div>
          <h4 className='quotebox-phrase_h2'>Source/Author: {phrase.author}</h4>
      </div>
    </section>
  )
}

export default QuoteBox