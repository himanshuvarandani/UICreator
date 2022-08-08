const H4Tag = ({ id, style={}, value="", ...rest }: HeadingPropType) => {
  return (
    <h4 id={id} style={style} {...rest}>
      {value}
    </h4>
  )
}

export default H4Tag
