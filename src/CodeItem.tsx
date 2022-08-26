import * as React from 'react'
import styles from './CodeItem.module.css'

export interface CodeItemProps {
  itemClassName: string;
}

const CodeItem = (props: CodeItemProps) => {
  const { itemClassName } = props;

  return (
    <React.Fragment>
      <input type="text" className={`code-item ${styles['code-item']} ${itemClassName}`} />
    </React.Fragment>
  )
}

export default CodeItem;