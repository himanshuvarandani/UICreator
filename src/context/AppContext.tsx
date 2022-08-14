import { createContext, useEffect, useState } from "react";
import AnchorTag from "../components/Tags/Anchor/Anchor"
import ButtonTag from "../components/Tags/Button/Button"
import DivTag from "../components/Tags/Div/Div"
import H1Tag from "../components/Tags/Headings/H1"
import H2Tag from "../components/Tags/Headings/H2"
import H3Tag from "../components/Tags/Headings/H3"
import H4Tag from "../components/Tags/Headings/H4"
import H5Tag from "../components/Tags/Headings/H5"
import H6Tag from "../components/Tags/Headings/H6"
import ImageTag from "../components/Tags/Image/Image"
import InputTag from "../components/Tags/Input/Input"
import LabelTag from "../components/Tags/Label/Label"
import LITag from "../components/Tags/LI/LI"
import OListTag from "../components/Tags/OList/OList"
import OptionTag from "../components/Tags/Option/Option"
import ParagraphTag from "../components/Tags/Paragraph/Paragraph"
import SelectTag from "../components/Tags/Select/Select"
import SpanTag from "../components/Tags/Span/Span"
import TextAreaTag from "../components/Tags/TextArea/TextArea"
import UListTag from "../components/Tags/Ul/Ul"

export const AppContext = createContext<AppContextType | null>(null)

const AppProvider = ({children}: AppContextPropType) => {
  const [allTags, setAllTags] = useState<AllTagsType>({})
  const [frameElements, setFrameElements] = useState<Array<FrameElementType>>([])
  const [frameElementProps, setFrameElementProps] = useState<FrameElementPropType>({})

  useEffect(() => {
    setAllTags({
      "a": AnchorTag,
      "button": ButtonTag,
      "div": DivTag,
      "h1": H1Tag,
      "h2": H2Tag,
      "h3": H3Tag,
      "h4": H4Tag,
      "h5": H5Tag,
      "h6": H6Tag,
      "image": ImageTag,
      "input": InputTag,
      "label": LabelTag,
      "li": LITag,
      "ol": OListTag,
      "option": OptionTag,
      "p": ParagraphTag,
      "select": SelectTag,
      "span": SpanTag,
      "textarea": TextAreaTag,
      "ul": UListTag,
    })
  }, [])

  const context = {
    allTags,
    frameElements,
    frameElementProps,
    setFrameElements,
    setFrameElementProps,
  }

  return (
    <AppContext.Provider value={context}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
