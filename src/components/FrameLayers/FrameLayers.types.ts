interface FrameLayersPropType {
  elements: Array<FrameElementType>,
  selectedElement: FrameElementType,
  setSelectedElement: React.Dispatch<React.SetStateAction<FrameElementType>>,
}
