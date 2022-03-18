import React, { useContext, useState } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { ChatContext } from '../context/chat/ChatContext';
import { SocketContext } from '../context/SocketContext';

const SendMessage = () => {
	const [message, setMessage] = useState('');
	const { socket } = useContext(SocketContext);
	const { auth } = useContext(AuthContext);
	const { chatState } = useContext(ChatContext);

	const handleChange = e => {
		setMessage(e.target.value);
	};

	const handleSubmit = e => {
		e.preventDefault();

		if (message.trim() === '') {
			return;
		}

		socket.emit('private-message', {
			from: auth.uid,
			to: chatState.activeChat,
			message,
		});

		setMessage('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='type_msg row'>
				<div className='input_msg_write col-sm-9'>
					<input
						type='text'
						className='write_msg'
						placeholder='Message...'
						value={message}
						onChange={handleChange}
					/>
				</div>
				<div className='col-sm-3 text-center'>
					<button className='msg_send_btn mt-3' type='submit'>
						send
					</button>
				</div>
			</div>
		</form>
	);
};

export default SendMessage;
