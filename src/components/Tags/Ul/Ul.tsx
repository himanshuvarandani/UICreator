const UListTag = ({ children, id, style={}, ...rest }: UListPropType) => {
  return (
    <ul id={id} style={style} {...rest}>
      {children}
    </ul>
  )
}

export default UListTag
