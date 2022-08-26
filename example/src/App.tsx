import React, { useState } from 'react'
import ReactInputCode from 'react-input-code'
import 'react-input-code/dist/index.css'

const App = () => {
  const [val, setVal] = useState('')

  return <>
    <ReactInputCode
      value={val}
      onChange={(e: any) => setVal(e)}
      type={'text'}
      className='my-input-code'
      itemClassName='code-item'
      nItems={6}
      autofocus={true} />
      <p>Current value: {val}</p>
  </>
}

export default App
