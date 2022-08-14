import { useContext, useState } from "react"
import { HTMLStyleProperties } from "../../constants"
import { AppContext } from "../../context/AppContext"
import "./RightPanel.css"

const RightPanel = ({ selectedElement }: RightPanelPropType) => {
  const context = useContext<AppContextType | null>(AppContext) as AppContextType
  const [newStyle, setNewStyle] = useState<{ key: string, value: string }>({ key: "", value: "" })
  const [newTag, setNewTag] = useState<string>("")
  const [value, setValue] = useState<string>("")

  const insertNewTag = () => {
    if (!newTag) return

    const id: string = `${newTag}-${Object.keys(context.frameElementProps).length+1}`
    context.setFrameElementProps((prevProps) => {
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
    context.setFrameElements((prevElements) => [
      ...prevElements,
      {
        tag: newTag,
        tagId: id,
        parentTagId: "",
      },
    ])
  }

  const updateTagStyle = () => {
    if (!selectedElement.tagId) return
    if (!newStyle.key || !newStyle.value) return

    context.setFrameElementProps((prevProps) => {
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
  }
  
  const updateTagValue = () => {
    if (!selectedElement.tagId) return
    if (!value) return

    context.setFrameElementProps((prevProps) => {
      return {
        ...prevProps,
        [selectedElement.tagId]: {
          ...prevProps[selectedElement.tagId],
          value,
        },
      }
    })
  }

  return (
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
          {Object.keys(context.allTags).map((tag, index) => (
            <option key={index} value={tag}>{tag}</option>
          ))}
        </select>
        <button
          className="rightPanelButton"
          onClick={insertNewTag}
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
        <select
          className="rightPanelDropdown"
          value={newStyle.key}
          onChange={(e) => setNewStyle((oldStyle) => {
            return { ...oldStyle, key: e.target.value }
          })}
        >
          <option key={-1} value="">Select New Style</option>
          {HTMLStyleProperties.map((styleName, index) => (
            <option key={index} value={styleName}>{styleName}</option>
          ))}
        </select>
        <input
          className="rightPanelInput"
          placeholder="Style Value"
          value={newStyle.value}
          onChange={(e) => setNewStyle({ ...newStyle, value: e.target.value })}
        />
        <button
          className="rightPanelButton"
          onClick={updateTagStyle}
        >
          Add
        </button>
      </div>
      <div className="rightPanelDiv3">
        <h3 className="rightPanelLabel">Insert Value</h3>
        <input
          className="rightPanelInput"
          placeholder="Style Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="rightPanelButton"
          onClick={updateTagValue}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default RightPanel
