const LabelTag = ({ children, id, style={}, ...rest }: LabelPropType) => {
  return (
    <label id={id} style={style} {...rest}>
      {children}
    </label>
  )
}

export default LabelTag
