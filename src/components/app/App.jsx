/* eslint-disable max-len */
import React from 'react';
import { useHeaders } from '../../state/CharacterProvider';
import CharacterList from '../characters/CharacterList';
import CharacterToggle from '../characters/CharacterToggle';
import Header from './Header';

export default function App() {
  const { currentHeader } = useHeaders();
  return (
    <>
      <div style={{ backgroundColor: currentHeader.background, color: currentHeader.foreground }}>
        <Header /> 
        <CharacterToggle />
        <CharacterList />
      </div>
    </>
  );
}
