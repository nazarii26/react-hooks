import React, { useRef } from 'react'

export const Input = () => {
	const ref = useRef(null);
	const handleFocus = () => {
		ref.current.style.color = 'green';
	};

	return (
		<div>
			<h2>it is a useRef</h2>
			<input type="text" ref={ref} placeholder='type a text' />
			<button onClick={handleFocus}>Focus-pocus</button>
		</div>
	)
}
