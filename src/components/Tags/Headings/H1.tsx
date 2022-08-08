const H1Tag = ({ id, style={}, value="", ...rest }: HeadingPropType) => {
  return (
    <h1 id={id} style={style} {...rest}>
      {value}
    </h1>
  )
}

export default H1Tag
