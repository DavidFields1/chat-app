/* eslint-disable no-constant-condition */
import React, { useContext } from 'react';
import Chat from '../components/Chat';
import InboxContacts from '../components/InboxContacts';
import ChatSelect from '../components/ChatSelect';
import '../css/chat.css';
import { ChatContext } from '../context/chat/ChatContext';

const ChatView = () => {
	const { chatState } = useContext(ChatContext);

	return (
		<div className='messaging'>
			<div className='inbox_msg'>
				<InboxContacts />
				{chatState.activeChat ? <Chat /> : <ChatSelect />}
			</div>
		</div>
	);
};

export default ChatView;
