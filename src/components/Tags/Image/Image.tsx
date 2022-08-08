const ImageTag = ({ id, style={}, ...rest }: ImagePropType) => {
  return (
    <img id={id} style={style} {...rest} />
  )
}

export default ImageTag
