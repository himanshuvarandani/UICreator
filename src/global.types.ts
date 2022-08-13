interface AllTagsType { [key: string]: (props: TagPropType) => JSX.Element }

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
