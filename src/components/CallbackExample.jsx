import React, { useEffect, useState, useCallback } from 'react'
import './style.css'

export const CallbackExample = () => {
	const [msg, setMsg] = useState('i like it');
	const information = useCallback((text) => {
		console.log(text)
	}, []);

	const [count, setCount] = useState(0);

	useEffect(() => {
		information(msg)
	}, [information, msg]);

	return (
		<div className="last__counter">
			<h2>useCallback</h2>
			<p>Open the console</p>
			<button onClick={() => setCount(count + 1)}>i like it {count} times</button>
		</div>
	)
}
