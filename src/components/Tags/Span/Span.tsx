const SpanTag = ({ children, id, style={}, ...rest }: SpanPropType) => {
  return (
    <span id={id} style={style} {...rest}>
      {children}
    </span>
  )
}

export default SpanTag
