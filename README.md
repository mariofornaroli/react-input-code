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
      type="text"
      className="my-input-code"
      itemClassName="my-code-item"
      nItems={6}
      autoFocus={true} 
      placeholder={'-'}/>
}
```

## Props

* nItems - number of items composing che html input code component
* value - control the current value
* onChange - subscribe to change events
* type - (optional) type attribute of each html input element ('text', 'number', 'password', etc...). Default value is 'text'
* className - (optional) additional class applied to the component container
* itemClassName - (optional) additional class applied to each element
* autoFocus - (optional) if set to true the first elemnt will be focused on component load
* placeholder - (optional) placeholder, the same char introduced in each element. If more than one char is present, only the first char will be considered


## Controlled Props

You can control the value / onChange props (specify the current value of the control) by providing values for them.


## License

MIT © [Mario Fornaroli](https://github.com/Mario Fornaroli)
