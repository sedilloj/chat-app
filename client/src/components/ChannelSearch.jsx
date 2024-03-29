import React, { useState, useEffect } from 'react'
import { useChatContext } from 'stream-chat-react'

const ChannelSearch = () => {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const getChannels = async (text) => {
    try {
      
    } catch (error) {
      setQuery('')
    }
  }

  const onSearch = (event) => {
    event.preventDefault()

    setLoading(true)
    setQuery(event.target.value)
    getChannels(event.target.value)
  }

  return (
    <div>
      <input
        placeholder='search'
        type='text'
        value={ query }
        onChange={onSearch}
      />
    </div>
  )
}

export default ChannelSearch