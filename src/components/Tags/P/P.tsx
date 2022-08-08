const PTag = ({ id, style={}, value="", ...rest }: PPropType) => {
  return (
    <p id={id} style={style} {...rest}>
      {value}
    </p>
  )
}

export default PTag
