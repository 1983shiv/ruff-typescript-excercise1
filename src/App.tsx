import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import StatusC from './components/StatusC';
import {posts } from "./data/post"
import {InputEle, InputEle2} from './components/InputEle';
import Container from './components/Container';
import LoggedIn from './components/LoggedIn';
import User from './components/User';

function App() {
  const [idd, setIdd] = useState<number | undefined>()
  const [name, setName] = useState<string>('')
  const funcc1 = (e: React.MouseEvent, id: number) => {
    setIdd(id)
    console.log("hello funcc1, idd : ", idd)
  }


  return (
    <div className="App">
      <h1>Learning Typescript</h1>
      {/* <LoggedIn /> */}
      <User />
      <Container styles={{border: '1px solid #ccc', padding: '1rem', margin: '20px', backgroundColor: '#f4f4f4'}} />
      <InputEle value={name} handleChange={(event) => setName(event.target.value)}/>
      {name && <span>You have typed : {name}</span>}
      <InputEle2 />
      <br />
      <Button handleClick={(e, id) => funcc1(e, id)}/>
      <Oscar>
        <Heading>
          <h2>Hello Heading</h2>
        </Heading>
      </Oscar>
      <StatusC msg={'loading'} />
      <Greet funcc1 = {funcc1} isLoggedIn = {true} posts= {posts}  messageCount={20}/>
     </div> 
      );
}

export default App;
