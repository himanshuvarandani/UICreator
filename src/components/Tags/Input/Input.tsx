const InputTag = ({ children, id, style={}, value="", ...rest }: InputPropType) => {
  return (
    <input
      id={id}
      style={style}
      value={value}
      {...rest}
    />
  )
}

export default InputTag
