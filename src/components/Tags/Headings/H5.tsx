import React from "react"

interface PropType extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string,
  value?: string,
}

const H5Tag = ({ id, style={}, value="", ...rest }: PropType) => {
  return (
    <h5 id={id} style={style} {...rest}>
      {value}
    </h5>
  )
}

export default H5Tag
