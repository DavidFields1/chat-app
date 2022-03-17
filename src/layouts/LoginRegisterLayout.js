import React from 'react';
import PropTypes from 'prop-types';

const LoginRegisterLayout = ({ children }) => {
	return (
		<div className='limiter'>
			<div className='container-login100'>
				<div className='wrap-login100 p-t-50 p-b-90'>{children}</div>
			</div>
		</div>
	);
};

LoginRegisterLayout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default LoginRegisterLayout;
