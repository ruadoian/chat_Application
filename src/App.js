import React from "react"
import {ChatEngine} from "react-chat-engine"
import './App.css'

import ChatFeed from "./components/ChatFeed"

const App = ()=>{
    return(
        <ChatEngine
            height="100vh"
            projectID="aca156f5-9a4c-4bd0-8843-9a0266df021c"
            userName='ruadoian'
			userSecret='password123'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App