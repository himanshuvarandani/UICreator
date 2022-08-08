const SelectTag = ({ children, id, style={}, ...rest }: SelectPropType) => {
  return (
    <select id={id} style={style} {...rest}>
      {children}
    </select>
  )
}

export default SelectTag
