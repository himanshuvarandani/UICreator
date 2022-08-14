import { useContext, useState } from "react"
import CallTag from "../../components/CallTag/CallTag"
import FrameLayers from "../../components/FrameLayers/FrameLayers"
import RightPanel from "../../components/RightPanel/RightPanel"
import DivTag from "../../components/Tags/Div/Div"
import { AppContext } from "../../context/AppContext"
import "./Home.css"

const Home = () => {
  const context = useContext<AppContextType | null>(AppContext) as AppContextType
  const [selectedElement, setSelectedElement] = useState<FrameElementType>({
    tag: "",
    tagId: "",
    parentTagId: "",
  })

  console.log(context.frameElements, context.frameElementProps);

  return (
    <div className="container">
      <div className="leftPanel">
        <h3 className="leftPanelHeading">Frame Layers</h3>
        <FrameLayers
          elements={context.frameElements}
          selectedElement={selectedElement}
          setSelectedElement={setSelectedElement}
        />
      </div>
      <div className="frame">
        <DivTag
          id="frameContainer"
          style={{ height: "80%", width: "80%", backgroundColor: "#e9e9e9" }}
        >
          {context.frameElements.map((element) => (
            <CallTag
              element={element}
              key={element.tagId}
            />
          ))}
        </DivTag>
      </div>
      <RightPanel selectedElement={selectedElement} />
    </div>
  )
}

export default Home
