import React from 'react'

const TeamChannelList = ({ children, error = false, loading, type }) => {
  if (error) {
    return type === 'team' ? (
      <div>
        <p>Connection error.</p>
      </div>
    ) : null
  }

  if (loading) {
    return (
      <div>
        <p>{type === 'team' ? 'Channels' : 'Messages'} loading...</p>
      </div>
    )
  }

  return (
    <div>
      <p>{ type === 'team' ? 'Channels' : 'Direct Messages' }</p>
      {children}
    </div>
  )
}

export default TeamChannelList