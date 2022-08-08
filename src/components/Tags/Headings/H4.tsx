import React from "react"

interface PropType extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string,
  value?: string,
}

const H4Tag = ({ id, style={}, value="", ...rest }: PropType) => {
  return (
    <h4 id={id} style={style} {...rest}>
      {value}
    </h4>
  )
}

export default H4Tag
