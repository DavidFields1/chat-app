import React from 'react';
import IncomingMessage from './IncomingMessage';
import OutgoingMessage from './OutgoingMessage';
import SendMessage from './SendMessage';

const Chat = () => {
	return (
		<div className='mesgs'>
			<div className='msg_history'>
				<IncomingMessage />

				<OutgoingMessage />
			</div>

			<SendMessage />
		</div>
	);
};

export default Chat;
