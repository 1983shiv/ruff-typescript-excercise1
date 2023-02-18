import React from 'react'

type oscarProp = {
    // receiving react component as props
    children: React.ReactNode
}

const Oscar = ({children} : oscarProp) => {
  return (
    <>{children}</>
  )
}

export default Oscar