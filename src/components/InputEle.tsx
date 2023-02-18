import React, { useState } from 'react'

type InputProp = {
    value: string, 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// Example of handleChange event handler received as props
export const InputEle = ({ value, handleChange}: InputProp) => {
  return (
    <div>
        <label htmlFor='name'>Your Name</label>
        <input type="text" value={value} onChange={handleChange} />
    </div>
  )
}

// Example of handleChange event handler withint component
export const InputEle2 = () => {
    const [myname, setMyname] = useState<string>('')
    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyname(event.target.value)
        console.log("myname", myname)
    }
    return (
      <div>
          <label htmlFor='name'>Your Name</label>
          <input type="text" value={myname} onChange={(e) => handleChange2(e)} />
      </div>
    )
  }
