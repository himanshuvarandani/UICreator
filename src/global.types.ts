interface AllTagsType { [key: string]: (props: TagPropType) => JSX.Element }

interface AppContextType {
  allTags: AllTagsType,
  frameElements: Array<FrameElementType>,
  frameElementProps: FrameElementPropType,
  setFrameElements: React.Dispatch<React.SetStateAction<Array<FrameElementType>>>,
  setFrameElementProps: React.Dispatch<React.SetStateAction<FrameElementPropType>>,
}

interface FrameElementPropType { [key: string]: TagPropType }

interface FrameElementType {
  tag: string,
  tagId: string,
  parentTagId: string,
}

interface TagPropType extends React.HTMLAttributes<HTMLElement> {
  frameElementChildren?: Array<FrameElementType>,
  children?: JSX.Element[],
  id: string,
  value?: string
}
