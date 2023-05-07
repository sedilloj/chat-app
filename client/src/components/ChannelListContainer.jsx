import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import Cookies from 'universal-cookie'

import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'

const SideBar = () => (
	<div>
	</div>
)

const CompanyHeader = () => {
	<div>
		<p>Chat App</p>
	</div>
}
const ChannelListContainer = () => {
	return (
		<>
      <SideBar />
      <div>
        <CompanyHeader />
        <ChannelSearch />
        <ChannelList
          filters={ {} }
          channelRenderFilterFn={ () => {} }
          List={ (listProps) => (
            <TeamChannelList
              { ...listProps }
              type="team"
            />
          ) }
          Preview={ (previewProps) => (
            <TeamChannelPreview
              { ...previewProps }
              type="team"
            />
          ) }
        />
        <ChannelList
          filters={ {} }
          channelRenderFilterFn={ () => {} }
          List={ (listProps) => (
            <TeamChannelList
              { ...listProps }
              type="messaging"
            />
          ) }
          Preview={ (previewProps) => (
            <TeamChannelPreview
              { ...previewProps }
              type="messaging"
            />
          ) }
        />
      </div>
		</>
  )
}

export default ChannelListContainer