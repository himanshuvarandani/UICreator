const TextAreaTag = ({ children, id, style={}, ...rest }: TextAreaPropType) => {
  return (
    <textarea id={id} style={style} {...rest}>
      {children}
    </textarea>
  )
}

export default TextAreaTag
