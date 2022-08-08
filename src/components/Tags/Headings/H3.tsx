import React from "react"

interface PropType extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string,
  value?: string,
}

const H3Tag = ({ id, style={}, value="", ...rest }: PropType) => {
  return (
    <h3 id={id} style={style} {...rest}>
      {value}
    </h3>
  )
}

export default H3Tag
