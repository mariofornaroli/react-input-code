import * as React from 'react'
import { useMemo } from 'react';
import CodeItem from './CodeItem';
import { ReactInputCodeProps } from './types/ReactInputCode';
import styles from './CodeItemList.module.css'


const CodeItemList = (props: ReactInputCodeProps) => {
  const { className, nItems, itemClassName } = props;

  const elements = useMemo((): JSX.Element[] => {
    const retElements: JSX.Element[] = [];
    if (!nItems) {
      return retElements;
    }
    for (let i = 0; i < nItems; i++) {
      const el = <CodeItem
        itemClassName={itemClassName}
      />
      retElements.push(el)
    }
    return retElements;

  }, [nItems])
 
  return <div className={`codes-container ${className} ${styles['codes-container']}`}>
    {elements} 
  </div>
}

export default CodeItemList;