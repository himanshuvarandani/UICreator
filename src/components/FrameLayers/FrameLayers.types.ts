interface FrameLayersPropType {
  frameElements: Array<FrameElementType>,
  frameElementProps: FrameElementPropType,
  selectedElement: FrameElementType,
  setFrameElements: React.Dispatch<React.SetStateAction<Array<FrameElementType>>>,
  setFrameElementProps: React.Dispatch<React.SetStateAction<FrameElementPropType>>,
  setSelectedElement: React.Dispatch<React.SetStateAction<FrameElementType>>,
}
