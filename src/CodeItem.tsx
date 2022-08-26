import * as React from 'react'

export interface CodeItemProps {
  itemClassName: string;
}

const CodeItem = (props: CodeItemProps) => {
  const { itemClassName } = props;

  return (
    <React.Fragment>
      <input type="text" className={itemClassName} />
    </React.Fragment>
  )
}

export default CodeItem;