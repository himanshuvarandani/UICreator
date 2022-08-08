const H2Tag = ({ id, style={}, value="", ...rest }: HeadingPropType) => {
  return (
    <h2 id={id} style={style} {...rest}>
      {value}
    </h2>
  )
}

export default H2Tag
