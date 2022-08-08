import { useEffect, useState } from "react"
import CallTag from "../../components/CallTag/CallTag"
import DivTag from "../../components/Tags/Div/Div"
import H1Tag from "../../components/Tags/Headings/H1"
import H2Tag from "../../components/Tags/Headings/H2"
import H3Tag from "../../components/Tags/Headings/H3"
import H4Tag from "../../components/Tags/Headings/H4"
import H5Tag from "../../components/Tags/Headings/H5"
import H6Tag from "../../components/Tags/Headings/H6"
import PTag from "../../components/Tags/P/P"
import "./Home.css"

const Home = () => {
  const [allTags, setAllTags] = useState<AllTagsType>({})
  const [frameElements, setFrameElements] = useState<FrameElementType>([])
  const [frameElementProps, setFrameElementProps] = useState<FrameElementPropType>({})
  const [newStyle, setNewStyle] = useState<{ key: string, value: string }>({ key: "", value: "" })
  const [newTag, setNewTag] = useState<string>("")
  const [selectedTag, setSelectedTag] = useState<string>("")

  useEffect(() => {
    setAllTags({
      "div": DivTag,
      "p": PTag,
      "h1": H1Tag,
      "h2": H2Tag,
      "h3": H3Tag,
      "h4": H4Tag,
      "h5": H5Tag,
      "h6": H6Tag,
    })
  }, [])
  
  return (
    <div className="container">
      <div className="leftPanel">
        <h3 className="leftPanelHeading">Frame Layers</h3>
        <div className="leftPanelTags">
          {Object.keys(frameElementProps).map((tagId) => (
            <p
              className="leftPanelTag"
              onClick={() => setSelectedTag(tagId)}
            >
              - {tagId}
            </p>
          ))}
        </div>
      </div>
      <div className="frame">
        <DivTag id="frameContainer" style={{ height: "80%", width: "80%", backgroundColor: "#e9e9e9" }}>
          {frameElements.map((element) => (
            <CallTag Tag={allTags[element.tag]} tagProps={frameElementProps[element.tagId]} />
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
                  [id]: { children: [], id: id, style: {}, value: "" }
                }
              })
              setFrameElements((prevElements) => [
                ...prevElements,
                {
                  tag: newTag,
                  tagId: id,
                },
              ])
            }}
          >
            Insert
          </button>
        </div>
        <div className="rightPanelDiv2">
          <p className="rightPanelLabel">Selected Tag</p>
          <p className="rightPanelTag">{!selectedTag ? "--" : selectedTag}</p>
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
              if (!selectedTag) return
              if (!newStyle.key || !newStyle.value) return

              setFrameElementProps((prevProps) => {
                return {
                  ...prevProps,
                  [selectedTag]: {
                    ...prevProps[selectedTag],
                    style: {
                      ...prevProps[selectedTag].style,
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
