import React, { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchAirBenderCharacters } from '../services/airBenderApi';
import { fetchRickAndMortyCharacters } from '../services/rickAndMortyApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const headers = {
    dark: {
      background: '#E600E6',
      foreground: '#400080'
    },
    light: {
      background: '#FFE6FF',
      foreground: '#DD33FF'
    }
  };
  
  const [characters, setCharacters] = useState([]);
  const [currentHeader, setCurrentHeader] = useState(headers.light);
  const [selectedApi, setSelectedApi] = useState('rickAndMorty');

  const apiMap = {
    rickAndMorty: fetchRickAndMortyCharacters,
    Airbender: fetchAirBenderCharacters,
  };

  useEffect(() => {
    apiMap[selectedApi]().then(setCharacters);
  }, [selectedApi]);

  const handleHeaderChange = ({ target }) => {
    setCurrentHeader(headers[target.value]);
  };

  return (
    // eslint-disable-next-line max-len
    <CharacterContext.Provider value={{ characters, currentHeader, handleHeaderChange, setSelectedApi, apiMap }}>
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacters = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
};

export const useHeaders = () => {
  const { currentHeader, handleHeaderChange } = useContext(CharacterContext);
  return { currentHeader, handleHeaderChange };
};

export const useSetSelectedApi = () => {
  const { setSelectedApi } = useContext(CharacterContext);
  return setSelectedApi;
};

export const useAvailableAPIs = () => {
  const { apiMap } = useContext(CharacterContext);
  return Object.keys(apiMap);
};
