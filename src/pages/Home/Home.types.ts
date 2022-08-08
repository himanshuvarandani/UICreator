interface AllTagsType { [key: string]: (props: TagPropType) => JSX.Element }

interface FrameElementPropType { [key: string]: TagPropType }

interface FrameElementType extends Array<{
  tag: string,
  tagId: string
}> {}
