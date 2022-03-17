import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { PrivateRoute } from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
	const { auth, validateToken } = useContext(AuthContext);

	useEffect(() => {
		validateToken();
	}, [validateToken]);

	useEffect(() => {
		if (auth.checking) {
			return <h1>Wait please</h1>;
		}
	}, [auth]);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/auth/*'
					element={<PublicRoute isAuthenticated={auth.loggedIn} />}
				/>
				<Route
					path='/'
					element={<PrivateRoute isAuthenticated={auth.loggedIn} />}
				/>
				<Route path='*' element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
