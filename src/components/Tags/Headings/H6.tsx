import React from "react"

interface PropType extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string,
  value?: string,
}

const H6Tag = ({ id, style={}, value="", ...rest }: PropType) => {
  return (
    <h6 id={id} style={style} {...rest}>
      {value}
    </h6>
  )
}

export default H6Tag
