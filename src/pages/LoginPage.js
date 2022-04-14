import React from 'react'
import {useNavigate} from 'react-router-dom';



export const LoginPage = ({ authenticate }) => {

	const navigate = useNavigate(null);
	const onClick = () => {
		authenticate();
		navigate("/");
	};

	return (
		<>
			<h1>Please authentificate yourself to continue</h1>
			<button onClick={onClick}>Log in</button>
		</>
	)
}
