const DivTag = ({ children, id, style={}, ...rest }: DivPropType) => {
  return (
    <div id={id} style={style} {...rest}>
      {children}
    </div>
  )
}

export default DivTag
