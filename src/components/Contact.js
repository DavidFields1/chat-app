import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChatContext } from '../context/chat/ChatContext';
import { fetchWithToken } from '../helpers/fetch';
import { scrollToBottomAtStart } from '../helpers/scrollChat';

const Contact = ({ contact }) => {
	const { chatState, setActiveChat, loadChat } = useContext(ChatContext);
	const { activeChat } = chatState;

	const handleClick = async () => {
		setActiveChat(contact.uid);

		const resp = await fetchWithToken(`/messages/${contact.uid}`);
		await loadChat(resp.message);
		scrollToBottomAtStart('scroll-chat');
	};

	return (
		<div
			className={`chat_list ${
				contact.uid === activeChat ? 'active_chat' : ''
			}`}
			onClick={handleClick}
		>
			<div className='chat_people'>
				<div className='chat_img'>
					<img
						src='https://ptetutorials.com/images/user-profile.png'
						alt='sunil'
					/>
				</div>
				<div className='chat_ib'>
					<h5>{contact.name}</h5>
					{contact.isOnline ? (
						<span className='text-success'>Online</span>
					) : (
						<span className='text-danger'>Offline</span>
					)}
				</div>
			</div>
		</div>
	);
};

Contact.propTypes = {
	contact: PropTypes.object.isRequired,
};

export default Contact;
