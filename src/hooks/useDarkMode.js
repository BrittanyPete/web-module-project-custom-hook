// import { useState } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (initValue) => {
    const [darkMode, setDarkMode] = useLocalStorage('darkModeOn', initValue);

    return[darkMode, setDarkMode];
}

export default useDarkMode;