import React, { useState } from 'react'
import { ContextButton } from '../components/ContextButton'
import { themes, ThemeContext } from '../contexts/theme-context'




export const AboutPage = () => {
  const [currentTheme, setCurrentTheme] = useState(themes.light);

  const toggleTheme = () => {
    setCurrentTheme((prevCurrentTheme) => prevCurrentTheme === themes.light ? themes.dark : themes.light);
  };

  return (
    <>
      <ThemeContext.Provider value={currentTheme}>
        <ContextButton />
      </ThemeContext.Provider>
      <button className="context__button" onClick={toggleTheme}>use context!</button>
    </>
  )
}
