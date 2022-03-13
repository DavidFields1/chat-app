import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatView from "../views/ChatView";
import AuthRouter from "./AuthRouter";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ChatView />} />
				<Route path="/auth/*" element={<AuthRouter />} />
				<Route path="*" element={<h1>404</h1>} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
