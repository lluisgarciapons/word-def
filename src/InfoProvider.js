import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { WordState } from './WordContext';

export const InfoState = createContext();

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState("");

    const { word } = useContext(WordState);


    useEffect(() => {
        axios.get(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`, {
            headers: { 'X-RapidAPI-Key': '9c82489347msh05e2b7e1ce9e053p1ed74bjsn6f910f0b85b6' }
        })
            .then(({ data }) => {
                console.log(data);
                setInfo(data.entries);
            });
    }, [word]);
    return (
        <InfoState.Provider value={{ info, setInfo }}>
            {children}
        </InfoState.Provider>
    );
};