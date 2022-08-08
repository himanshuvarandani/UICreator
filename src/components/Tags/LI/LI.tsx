const LITag = ({ children, id, style={}, ...rest }: LIPropType) => {
  return (
    <li id={id} style={style} {...rest}>
      {children}
    </li>
  )
}

export default LITag
