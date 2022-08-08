const AnchorTag = ({ children, id, style={}, ...rest }: AnchorPropType) => {
  return (
    <a id={id} style={style} {...rest}>
      {children}
    </a>
  )
}

export default AnchorTag
