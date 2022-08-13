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

  const dragEnterMoveNext = (element: FrameElementType) => {
    if (element === selectedElement) return    

    if (element.parentTagId !== selectedElement.parentTagId) {
      dragEnterMoveToChild(element.tagId)
      return
    }

    if (!element.parentTagId) {
      setFrameElements((prevElements) => {
        const from = prevElements.indexOf(selectedElement)
        const to = prevElements.indexOf(element)+1
        prevElements.splice(from, 1)
        prevElements.splice(to, 0, selectedElement)
        return [ ...prevElements ]
      })
    } else {
      setFrameElementProps((prevProps) => {
        const children = prevProps[element.parentTagId].frameElementChildren
        const from = children?.indexOf(selectedElement) || 0
        const to = children?.indexOf(element) || 0
        children?.splice(from, 1)
        children?.splice(to+1, 0, selectedElement)
        return {
          ...prevProps,
          [element.parentTagId]: {
            ...prevProps[element.parentTagId],
            frameElementChildren: children,
          }
        }
      })
    }
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
          {!frameElementProps[element.tagId].frameElementChildren?.length
            ? null
            : (
              <FrameLayers
                frameElements={
                  frameElementProps[element.tagId].frameElementChildren || []
                }
                frameElementProps={frameElementProps}
                selectedElement={selectedElement}
                setFrameElements={setFrameElements}
                setFrameElementProps={setFrameElementProps}
                setSelectedElement={setSelectedElement}
              />
            )
          }
          <div
            className="elementBreak"
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => dragEnterMoveNext(element)}
          />
        </div>
      ))}
    </div>
  )
}

export default FrameLayers
