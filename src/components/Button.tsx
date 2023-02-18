import React from 'react'
type ButtonProp = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}


const Button = ({handleClick}: ButtonProp) => {
    let idd = 6;
  return (
    <>hello button comp
    <button onClick={(e) => handleClick(e, idd)}>Click Me</button>
    </>
  )
}

export default Button