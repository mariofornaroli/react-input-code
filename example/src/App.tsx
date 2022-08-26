import React from 'react'

import { ReactInputCode } from 'react-input-code'
import 'react-input-code/dist/index.css'

const App = () => {
  return <ReactInputCode 
  className='my-input-code'
  itemClassName='code-item'
  nItems={6} />
}

export default App
