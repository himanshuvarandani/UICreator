const H5Tag = ({ id, style={}, value="", ...rest }: HeadingPropType) => {
  return (
    <h5 id={id} style={style} {...rest}>
      {value}
    </h5>
  )
}

export default H5Tag
