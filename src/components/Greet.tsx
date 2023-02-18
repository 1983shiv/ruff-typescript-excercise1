import React from 'react'

type greetProps = {
  // string data type
  name? : string,
  // number data type
  messageCount: number,
  // array of object data type
  posts : {
    userId: number,
    id: number,
    title: string,
    body: string
  }[],
  // boolean data type
  isLoggedIn: boolean,
  funcc1: Function
}

const Greet = ({name, messageCount, posts, isLoggedIn = false, funcc1 }:greetProps) => {
  return (
    <>
    <div>Hello From Greet component - {name} - {messageCount} </div>
    {isLoggedIn && posts.map((p) => {
      return (
        <div key={p.id}>
          <h2>{p.id} - {p.title}</h2>
        </div>
      )
    })}
    
    </>
  )
}

export default Greet