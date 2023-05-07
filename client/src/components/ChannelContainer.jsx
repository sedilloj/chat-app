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
const ChannelContainer = () => {
	return (
		<>
			<SideBar />
		</>
  )
}

export default ChannelContainer