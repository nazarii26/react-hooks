import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'

export const ContextButton = () => {
	const theme = useContext(ThemeContext);

	return (
		<>
			<div className="context__block" style={{ background: theme.background, color: theme.textColor }}>
				<h1>showing context</h1></div>
		</>
	)
}
