import { Button } from "antd"
import { useEffect, useState } from "react"
import NewMessage, { PropsType } from "./NewMessage"

export const Messages = () => {
   let WebSock: WebSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
   const [messages, setMessages] = useState<PropsType[]>([])
   useEffect(() => {
      WebSock.addEventListener('message', (e) => {
         let newMessages = JSON.parse(e.data)
         setMessages((prevMessages) => [...prevMessages, ...newMessages])
      }
      )
   }, [])
   const [newMessage, updateMessage] = useState('')
   const SendMessage = () => {
      if (!newMessage) {
         return
      }
      WebSock.send(newMessage)
      updateMessage('')
   }


   return (
      <div >
         <div style={{ height: '367px', overflowY: 'auto' }}>
            {messages.map(U => <NewMessage photo={U.photo} userName={U.userName} message={U.message} />)}
         </div>
         <div>
            <textarea style={{ height: '100px', width: '200px', marginTop: '10px' }} value={newMessage} onChange={(e) => updateMessage(e.target.value)} />
            <Button type='primary' size="small" onClick={SendMessage}>Send</Button>
         </div>
      </div>
   )

}

