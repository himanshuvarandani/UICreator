import React from "react"

interface PropType extends React.HTMLAttributes<HTMLDivElement> {
  children?: Array<JSX.Element>,
  id: string,
}

const DivTag = ({ children, id, style={}, ...rest }: PropType) => {
  return (
    <div id={id} style={style} {...rest}>
      {children}
    </div>
  )
}

export default DivTag
