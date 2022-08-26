import React, { useState } from 'react'
import ReactInputCode from 'react-input-code'
import 'react-input-code/dist/index.css'

const App = () => {
  const [value, setValue] = useState('')

  return <>
    <ReactInputCode
      value={value}
      onChange={setValue}
      type="text"
      className="my-input-code"
      itemClassName="my-code-item"
      nItems={6}
      autoFocus={true} />

    <p>Current value: {value}</p>
  </>
}

export default App
