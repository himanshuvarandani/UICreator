import { useEffect, useState } from "react"
import CallTag from "../../components/CallTag/CallTag"
import FrameLayers from "../../components/FrameLayers/FrameLayers"
import AnchorTag from "../../components/Tags/Anchor/Anchor"
import ButtonTag from "../../components/Tags/Button/Button"
import DivTag from "../../components/Tags/Div/Div"
import H1Tag from "../../components/Tags/Headings/H1"
import H2Tag from "../../components/Tags/Headings/H2"
import H3Tag from "../../components/Tags/Headings/H3"
import H4Tag from "../../components/Tags/Headings/H4"
import H5Tag from "../../components/Tags/Headings/H5"
import H6Tag from "../../components/Tags/Headings/H6"
import ImageTag from "../../components/Tags/Image/Image"
import InputTag from "../../components/Tags/Input/Input"
import LabelTag from "../../components/Tags/Label/Label"
import LITag from "../../components/Tags/LI/LI"
import OListTag from "../../components/Tags/OList/OList"
import OptionTag from "../../components/Tags/Option/Option"
import ParagraphTag from "../../components/Tags/Paragraph/Paragraph"
import SelectTag from "../../components/Tags/Select/Select"
import SpanTag from "../../components/Tags/Span/Span"
import TextAreaTag from "../../components/Tags/TextArea/TextArea"
import UListTag from "../../components/Tags/Ul/Ul"
import "./Home.css"

const Home = () => {
  const [allTags, setAllTags] = useState<AllTagsType>({})
  const [frameElements, setFrameElements] = useState<Array<FrameElementType>>([])
  const [frameElementProps, setFrameElementProps] = useState<FrameElementPropType>({})
  const [newStyle, setNewStyle] = useState<{ key: string, value: string }>({ key: "", value: "" })
  const [newTag, setNewTag] = useState<string>("")
  const [selectedElement, setSelectedElement] = useState<FrameElementType>({
    tag: "",
    tagId: "",
    parentTagId: "",
  })

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
  
  return (
    <div className="container">
      <div className="leftPanel">
        <h3 className="leftPanelHeading">Frame Layers</h3>
        <FrameLayers
          frameElements={frameElements}
          frameElementProps={frameElementProps}
          selectedElement={selectedElement}
          setFrameElements={setFrameElements}
          setFrameElementProps={setFrameElementProps}
          setSelectedElement={setSelectedElement}
        />
      </div>
      <div className="frame">
        <DivTag
          id="frameContainer"
          style={{ height: "80%", width: "80%", backgroundColor: "#e9e9e9" }}
        >
          {frameElements.map((element) => (
            <CallTag
              allTags={allTags}
              element={element}
              frameElementProps={frameElementProps}
              key={element.tagId}
            />
          ))}
        </DivTag>
      </div>
      <div className="rightPanel">
        <h3 className="rightPanelHeading">Select/Insert Tags</h3>
        <div className="rightPanelDiv1">
          <p className="rightPanelLabel">Insert New Tag</p>
          <select
            className="rightPanelDropdown"
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
          >
            <option key={-1} value="">Select Tag</option>
            {Object.keys(allTags).map((tag, index) => (
              <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
          <button
            className="rightPanelButton"
            onClick={() => {
              if (!newTag) return

              const id: string = `${newTag}-${frameElements.length+1}`
              setFrameElementProps((prevProps) => {
                return {
                  ...prevProps,
                  [id]: {
                    frameElementChildren: [],
                    id: id,
                    style: {},
                    value: ""
                  }
                }
              })
              setFrameElements((prevElements) => [
                ...prevElements,
                {
                  tag: newTag,
                  tagId: id,
                  parentTagId: "",
                },
              ])
            }}
          >
            Insert
          </button>
        </div>
        <div className="rightPanelDiv2">
          <p className="rightPanelLabel">Selected Tag</p>
          <p className="rightPanelTag">{!selectedElement.tagId ? "--" : selectedElement.tagId}</p>
        </div>
        <div className="rightPanelDiv3">
          <h3 className="rightPanelLabel">Insert style</h3>
          <input
            className="rightPanelInput"
            placeholder="Style Name"
            value={newStyle.key}
            onChange={(e) => setNewStyle({ ...newStyle, key: e.target.value })}
          />
          <input
            className="rightPanelInput"
            placeholder="Style Value"
            value={newStyle.value}
            onChange={(e) => setNewStyle({ ...newStyle, value: e.target.value })}
          />
          <button
            className="rightPanelButton"
            onClick={() => {
              if (!selectedElement.tagId) return
              if (!newStyle.key || !newStyle.value) return

              setFrameElementProps((prevProps) => {
                return {
                  ...prevProps,
                  [selectedElement.tagId]: {
                    ...prevProps[selectedElement.tagId],
                    style: {
                      ...prevProps[selectedElement.tagId].style,
                      [newStyle.key]: newStyle.value,
                    },
                  },
                }
              })
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home
