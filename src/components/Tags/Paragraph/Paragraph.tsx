const ParagraphTag = ({ id, style={}, value="", ...rest }: ParagraphPropType) => {
  return (
    <p id={id} style={style} {...rest}>
      {value}
    </p>
  )
}

export default ParagraphTag
