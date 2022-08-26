# react-input-code

> React component to insert a code in a series of single char input elements

[![NPM](https://img.shields.io/npm/v/react-input-code.svg)](https://www.npmjs.com/package/react-input-code) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-input-code
```

## Usage

```tsx
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
```

## License

MIT © [Mario Fornaroli](https://github.com/Mario Fornaroli)
