import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { WordState } from './WordContext';

export const InfoState = createContext();

export const InfoProvider = ({ children }) => {
    const [info, setInfo] = useState("");

    const { word } = useContext(WordState);


    useEffect(() => {
        console.log(process.env);
        axios.get(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${word}`, {
            headers: { 'X-RapidAPI-Key': process.env.REACT_APP_API_KEY }
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