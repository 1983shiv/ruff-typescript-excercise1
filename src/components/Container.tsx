import React from 'react'

type containerProp = {
    styles: React.CSSProperties
}

const Container = ({styles} : containerProp) => {
  return (
    <div style={styles}>This is Container Style components</div>
  )
}

export default Container