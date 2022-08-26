# react-input-code

> React component to insert a code in a series of single char input elements


![demo_image](https://user-images.githubusercontent.com/16925256/186970066-84f5741a-9d6d-442e-b5cf-7f62ceadb2a1.jpg)

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
  const [value, setValue] = useState('')

  return <>
    <ReactInputCode
      value={value}
      onChange={setValue}
      type={'text'}
      className='my-input-code'
      itemClassName='my-code-item'
      nItems={6}
      autofocus={true} />

    <p>Current value: {value}</p>
  </>
}
```

## License

MIT © [Mario Fornaroli](https://github.com/Mario Fornaroli)
