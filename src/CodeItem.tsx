import * as React from 'react'
import { useEffect, useRef } from 'react';
import styles from './CodeItem.module.css'

export interface CodeItemProps {
  itemClassName: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  itemIndex: number;
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  type: React.HTMLInputTypeAttribute | undefined;
  onClickHandler: (index: number) => void;
  isFocused: boolean;
  interactionCounter: number;
  autofocus?: boolean;
}

const CodeItem = (props: CodeItemProps) => {
  const { itemClassName, value, onChange, itemIndex, type, onClickHandler, isFocused, interactionCounter, autofocus } = props;
  const inputRef = useRef(null);

  useEffect(() => {
    const inputEl: any = inputRef.current;
    if (interactionCounter === 0 && !autofocus) {
      inputEl && inputEl.blur();
      return;
    }
    if (isFocused) {
      inputEl && inputEl.focus();
    } else {
      inputEl && inputEl.blur();
    }
  }, [isFocused, interactionCounter])

  useEffect(() => {

  }, [])
  
  const handleFocus = (event: any) => event.target.select();

  return (
    <React.Fragment>
      <input
        ref={inputRef}
        type={type}
        value={value || ''}
        onChange={(e) => onChange(e, itemIndex)}
        className={`code-item ${styles['code-item']} ${itemClassName}`}
        onClick={() => onClickHandler(itemIndex)}
        maxLength={1}
        onFocus={handleFocus}
      />
    </React.Fragment>
  )
}

export default CodeItem;