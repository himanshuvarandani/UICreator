import React from "react"

interface PropType extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string,
  value?: string,
}

const H2Tag = ({ id, style={}, value="", ...rest }: PropType) => {
  return (
    <h2 id={id} style={style} {...rest}>
      {value}
    </h2>
  )
}

export default H2Tag
