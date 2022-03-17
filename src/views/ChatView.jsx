import React from 'react';
import Chat from '../components/Chat';
import InboxContacts from '../components/InboxContacts';
import '../css/chat.css';

const ChatView = () => {
	return (
		<div className='messaging'>
			<div className='inbox_msg'>
				<InboxContacts />

				<Chat />
			</div>
		</div>
	);
};

export default ChatView;
