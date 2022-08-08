import React from "react"

interface PropType extends React.HTMLAttributes<HTMLParagraphElement> {
  id: string,
  value?: string,
}

const PTag = ({ id, style={}, value="", ...rest }: PropType) => {
  return (
    <p id={id} style={style} {...rest}>
      {value}
    </p>
  )
}

export default PTag
