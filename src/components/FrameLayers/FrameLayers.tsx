import "./FrameLayers.css"

const FrameLayers = ({
  frameElements,
  frameElementProps,
  selectedElement,
  setFrameElements,
  setFrameElementProps,
  setSelectedElement,
}: FrameLayersPropType) => {

  const dragStart = (element: FrameElementType) => {
    setSelectedElement(element)
  }

  const dragEnterMoveNext = () => {
    
  }

  const dragEnterMoveToChild = (tagId: string) => {
    if (tagId === selectedElement.tagId) return

    if (!selectedElement.parentTagId) {
      setFrameElementProps((prevProps) => {
        const newProps = {
          ...prevProps,
          [tagId]: {
            ...prevProps[tagId],
            frameElementChildren: [
              ...(prevProps[tagId].frameElementChildren || []),
              {
                tag: selectedElement.tag,
                tagId: selectedElement.tagId,
                parentTagId: tagId,
              },
            ]
          }
        }
        return newProps
      })
      setFrameElements((prevElements) => {
        const newElements = prevElements.
          filter((element) => element.tagId !== selectedElement.tagId)
        return newElements
      })
    } else {
      setFrameElementProps((prevProps) => {
        let children = 
          prevProps[selectedElement.parentTagId].frameElementChildren?.
          filter((child) => child.tagId !== selectedElement.tagId)
        return {
          ...prevProps,
          [selectedElement.parentTagId]: {
            ...prevProps[selectedElement.tagId],
            frameElementChildren: children,
          },
          [tagId]: {
            ...prevProps[tagId],
            frameElementChildren: [
              ...(prevProps[tagId].frameElementChildren || []),
              {
                tag: selectedElement.tag,
                tagId: selectedElement.tagId,
                parentTagId: tagId,
              },
            ]
          }
        }
      })
    }
    setSelectedElement((prevElement) => {
      return {
        ...prevElement,
        parentTagId: tagId,
      }
    })
  }

  return (
    <div className="tags">
      {frameElements.map((element, index) => (
        <div key={index}>
          <div>
            <p
              className="tag"
              draggable
              key={element.tagId}
              onClick={() => setSelectedElement(element)}
              onDragStart={() => dragStart(element)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => dragEnterMoveToChild(element.tagId)}
            >
              - {element.tagId}
            </p>
            {!frameElementProps[element.tagId].frameElementChildren?.length ? null : (
              <div>
                <FrameLayers
                  frameElements={frameElementProps[element.tagId].frameElementChildren || []}
                  frameElementProps={frameElementProps}
                  selectedElement={selectedElement}
                  setFrameElements={setFrameElements}
                  setFrameElementProps={setFrameElementProps}
                  setSelectedElement={setSelectedElement}
                />
              </div>
            )}
          </div>
          <div className="elementBreak" onDragEnter={dragEnterMoveNext} />
        </div>
      ))}
    </div>
  )
}

export default FrameLayers
