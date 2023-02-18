type HeadingProps = {
    // receiving html as props
    children: JSX.Element
}

const Heading = ({children}: HeadingProps) => {
  return (
    <div>{children}</div>
  )
}

export default Heading