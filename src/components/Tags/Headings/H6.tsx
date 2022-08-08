const H6Tag = ({ id, style={}, value="", ...rest }: HeadingPropType) => {
  return (
    <h6 id={id} style={style} {...rest}>
      {value}
    </h6>
  )
}

export default H6Tag
