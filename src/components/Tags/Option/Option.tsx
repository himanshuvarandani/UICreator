const OptionTag = ({ children, id, style={}, ...rest }: OptionPropType) => {
  return (
    <option id={id} style={style} {...rest}>
      {children}
    </option>
  )
}

export default OptionTag
