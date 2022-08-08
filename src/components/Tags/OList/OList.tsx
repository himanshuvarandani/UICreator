const OListTag = ({ children, id, style={}, ...rest }: OListPropType) => {
  return (
    <ol id={id} style={style} {...rest}>
      {children}
    </ol>
  )
}

export default OListTag
