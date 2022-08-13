import { useEffect, useState } from "react"

const CallTag = ({ allTags, frameElementProps, element }: CallTagPropType) => {
  const [children, setChildren] = useState<Array<JSX.Element>>([])
  const Tag: (props: TagPropType) => JSX.Element = allTags[element.tag]
  const { frameElementChildren, ...restProps } = frameElementProps[element.tagId]

  useEffect(() => {
    setChildren([])
    frameElementChildren?.map((childElement) => {
      setChildren((prevChildren) => [
        ...prevChildren,
        <CallTag
          allTags={allTags}
          element={childElement}
          frameElementProps={frameElementProps}
          key={childElement.tagId}
        />
      ])
    })
  }, [frameElementProps])

  return (
    <Tag {...restProps} children={children} />
  )
}

export default CallTag
