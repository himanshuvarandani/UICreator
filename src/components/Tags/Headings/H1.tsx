import React from "react"

interface PropType extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string,
  value?: string,
}

const H1Tag = ({ id, style={}, value="", ...rest }: PropType) => {
  return (
    <h1 id={id} style={style} {...rest}>
      {value}
    </h1>
  )
}

export default H1Tag
