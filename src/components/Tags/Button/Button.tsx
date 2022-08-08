const ButtonTag = ({ children, id, style={}, ...rest }: ButtonPropType) => {
  return (
    <button id={id} style={style} {...rest}>
      {children}
    </button>
  )
}

export default ButtonTag
