const H3Tag = ({ id, style={}, value="", ...rest }: HeadingPropType) => {
  return (
    <h3 id={id} style={style} {...rest}>
      {value}
    </h3>
  )
}

export default H3Tag
