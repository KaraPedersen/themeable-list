import React from 'react';
import { useCharacters } from '../../state/CharacterProvider';
import Character from './Character';

const CharacterList = () => {
  const characters = useCharacters();
  const characterElements = characters.map((character) => (
    <li key={character.name}>
      <Character {...character} />
    </li>
  ));

  return <ul style={{ listStyle: 'none' }}> {characterElements}</ul>;
};

export default CharacterList;
