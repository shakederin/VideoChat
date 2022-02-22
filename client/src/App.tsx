import React, { createContext, useEffect, useState } from 'react';
import MessageScreen from './components/MessageScreen';
import socket from "./utils/socket"
import Video from './components/Video';
import Login from './components/entery/Login';

export const context = createContext({id: "123", userName:"noOne"});

function App() {
  const [myID, setMyID] = useState<Types.userObj>({id: "", userName:""})
  useEffect(() => {
    socket.on("getID", (userObj: Types.userObj)=>{
      setMyID(userObj)
    });    
  }, [])

    console.log(myID);
    
  
  return (
    <div className="App">
      <context.Provider value={myID}>
        { !myID.userName  ?
        <Login/> :
        <MessageScreen />
        }
      </context.Provider>
    </div>
  );
}

export default App;



 // const [myStream, setMyStream] = useState<MediaStream>()
  // const [allStream, setAllStream] = useState<MediaStream[]>([])


// socket.current.emit("sendNewMsg", (message))
      

    // socket.current.on("getStream", (stream)=>{
    //   console.log(stream);
    //   console.log("stream");
    //   setAllStream(stream)
    // });
    // getUserFullMedia().then((media)=>{
    //   setMyStream(media)
    //   console.log(media);
    // })



// useEffect(()=>{
  //   console.log(myStream, "myStream");
  //    if(!(socket && socket.current)) return
  //   socket.current.emit("newUserLogin", (myStream))
  // },[myStream])

  // const showAllStream = (allStream: MediaStream[]) =>{
  //   const videoElements = allStream.map((stream)=>{
  //     <Video srcObject = {stream}/>
  //   })
  //   return videoElements
  // }
  // console.log(allStream);
  
  // const getUserFullMedia = async () => {
  //   const media = await navigator.mediaDevices.getUserMedia( {
  //       video: true,
  //       audio: {
  //           echoCancellation: true,
  //           noiseSuppression: true
  //       }
  //   } );
  //   console.log(media);
  //   return media
  // }