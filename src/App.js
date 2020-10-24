import { Button,InputLabel,Input } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import FormControl from '@material-ui/core/FormControl';
import './App.css';
import Message from './Message';
import db from "./firebase";
import firebase from "firebase";
import { forwardRef } from 'react';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(()=>{
        //run when the app component loads
        db.collection('messages').orderBy("timestamp","desc").onSnapshot(snapshot=>{
          setMessages(snapshot.docs.map(doc=>({id:doc.id,message:doc.data()})))
        });
  },[])

  useEffect(() => {
    //runs code here
    //if it is blanck inside [] this code runs once when the app component loads
    setUsername(prompt("Please enter your name.."));
  
  }, [])
  
  const sendMessage=(e)=>{
    //allthe logic of sending mesasage goes here
    e.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput(' ');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" alt=""/>
     <h1>Messenger Clone App</h1>
     <h2>{username}</h2>
     {/* input feild */}
     <form action="" className="app__form">
     <FormControl className="app__formControl">
      <InputLabel>Send Message...</InputLabel>
      <Input  className="app__input" value={input}
       onChange={e=>setInput(e.target.value)} />


      <IconButton className="app__iconbutton"
      color="primary"  disabled={!input}
      variant="outlined" type="submit" onClick={sendMessage}>
        <SendIcon/>
      </IconButton>
    </FormControl>
     
     {/* button */}
     
     
     </form>
    
     {/* messages */}
     <FlipMove>
     {
       messages.map(({id,message})=>(
         <Message message={message} username={username} key={id}/>
       ))
     }
     </FlipMove>
 
      
    </div>
  );
}

export default App;
