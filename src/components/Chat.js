import React, { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';
import SendMessage from './SendMessage';

const Chat = () => {
	const { chatState } = useContext(ChatContext);
	const { auth } = useContext(AuthContext);

	// useEffect(() => {
	// 	console.log('chatState', chatState);
	// }, [chatState]);

	return (
		<div className='mesgs'>
			<div className='msg_history' id='scroll-chat'>
				{chatState.messages.map(message => {
					if (message.from === auth.uid) {
						return (
							<OutgoingMessage
								key={message._id}
								messageData={message}
							/>
						);
					} else {
						return (
							<IncomingMessage
								key={message._id}
								messageData={message}
							/>
						);
					}
				})}
			</div>
			<SendMessage />
		</div>
	);
};

export default Chat;
