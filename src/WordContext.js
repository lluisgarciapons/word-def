import React, { createContext, useState } from 'react';

export const WordState = createContext();

export const WordProvider = ({ children }) => {
    const [word, setWord] = useState("");

    return (
        <WordState.Provider value={{ word, setWord }}>
            {children}
        </WordState.Provider>
    );
};