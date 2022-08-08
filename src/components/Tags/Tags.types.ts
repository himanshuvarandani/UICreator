interface DivPropType extends React.HTMLAttributes<HTMLDivElement> {
  children?: Array<JSX.Element>,
  id: string,
}

interface HeadingPropType extends React.HTMLAttributes<HTMLHeadingElement> {
  id: string,
  value?: string,
}

interface PPropType extends React.HTMLAttributes<HTMLParagraphElement> {
  id: string,
  value?: string,
}
