import React from 'react'
import { StreamChat } from 'stream-chat'
import { Chat } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { AuthForm, ChannelListContainer, ChannelContainer } from './components'

const apiKey = '000'
const client = StreamChat.getInstance(apiKey)
const authToken = false

const App = () => {
  if (!authToken) return <AuthForm/>
  return (
    <>
      <Chat client={client}>
        <ChannelListContainer

        />
        <ChannelContainer

        />
      </Chat>
    </>
  )
}

export default App