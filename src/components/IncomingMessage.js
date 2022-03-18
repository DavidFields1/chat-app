/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { hourMonth } from '../helpers/formatDate';

const IncomingMessage = ({ messageData }) => {
	const { message, createdAt } = messageData;

	return (
		<div className='incoming_msg'>
			<div className='incoming_msg_img'>
				<img
					src='https://ptetutorials.com/images/user-profile.png'
					alt='sunil'
				/>
			</div>
			<div className='received_msg'>
				<div className='received_withd_msg'>
					<p>{message}</p>
					<span className='time_date'> {hourMonth(createdAt)} </span>
				</div>
			</div>
		</div>
	);
};

IncomingMessage.protoTypes = {
	messageData: PropTypes.object.isRequired,
};

export default IncomingMessage;
