import * as React from 'react'
import { useMemo, useState } from 'react';
import CodeItem from './CodeItem';
import { ReactInputCodeProps } from './types/ReactInputCode';
import styles from './CodeItemList.module.css'

const CodeItemList = (props: ReactInputCodeProps) => {
  const { className, nItems, itemClassName, value, type, onChange, autoFocus,
    placeholder, disabled } = props;
  const [currentIndex, setCurrentIndex] = useState(0)
  const [interactionCounter, setInteractionCounter] = useState(0)

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, _index: number) => {
    const itemValue = e.target.value
    const codeLength = (value && value.length) || 0
    if (_index <= codeLength) {
      let str = value.split('');
      str[_index] = itemValue;
      str = str.join('');
      onChange(str)
      setCurrentIndex(currentIndex + 1)
    }
  }

  const onClickHandler = (_index: number) => {
    const codeLength = (value && value.length) || 0
    if (_index > codeLength) {
      setCurrentIndex(codeLength)
    } else {
      setCurrentIndex(_index)
    }
    setInteractionCounter(interactionCounter + 1)
  }

  const placeholderFirstChar = useMemo(() => {
    if (placeholder && placeholder.length > 1) {
      return placeholder.charAt(0)
    }
    return placeholder
  }, [placeholder])

  const getElements = (): JSX.Element[] => {
    const retElements: JSX.Element[] = [];
    if (!nItems) {
      return retElements;
    }
    for (let i = 0; i < nItems; i++) {
      const elValue = i > (value && value.length) ? '' : value[i]

      const el = <CodeItem
        key={`item-${i}`}
        value={elValue}
        onChange={onChangeHandler}
        onClickHandler={onClickHandler}
        itemClassName={itemClassName || ''}
        itemIndex={i}
        type={type || 'text'}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isFocused={currentIndex === i}
        interactionCounter={interactionCounter}
        autoFocus={autoFocus}
        placeholder={placeholderFirstChar}
        disabled={disabled}
      />
      retElements.push(el)
    }
    return retElements;
  }

  return (
    <React.Fragment>
      <div className={`codes-container ${className} ${styles['codes-container']}`}>
        {getElements()}
      </div>
    </React.Fragment>)
}

export default CodeItemList;