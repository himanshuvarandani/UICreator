import React from "react"

interface TagPropType extends React.HTMLAttributes<HTMLElement> {
  children?: JSX.Element[],
  id: string,
  value?: string
}

type PropType = {
  Tag: (props: TagPropType) => JSX.Element,
  tagProps: TagPropType
}

const CallTag = ({ Tag, tagProps }: PropType) => {
  return (
    <Tag {...tagProps} />
  )
}

export default CallTag
