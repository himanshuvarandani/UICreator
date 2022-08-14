import { useContext, useEffect, useState } from "react"
import { AppContext } from "../../context/AppContext"

const CallTag = ({ element }: CallTagPropType) => {
  const [children, setChildren] = useState<Array<JSX.Element>>([])
  const context = useContext<AppContextType | null>(AppContext) as AppContextType
  const Tag: (props: TagPropType) => JSX.Element = context.allTags[element.tag]
  const { frameElementChildren, ...restProps } = context.frameElementProps[element.tagId]

  useEffect(() => {
    setChildren([])
    frameElementChildren?.map((childElement) => {
      setChildren((prevChildren) => [
        ...prevChildren,
        <CallTag
          element={childElement}
          key={childElement.tagId}
        />
      ])
    })
  }, [context.frameElementProps])

  return (
    <Tag {...restProps} children={children} />
  )
}

export default CallTag
