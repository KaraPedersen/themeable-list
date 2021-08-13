/* eslint-disable max-len */
import React from 'react';
import { Router, Switch, useParams } from '../../state/RouterProvider';
import { useHeaders } from '../../state/CharacterProvider';
import CharacterList from '../characters/CharacterList';
import CharacterToggle from '../characters/CharacterToggle';
import Header from './Header';


const Home = () => {
  return <h1>Home page</h1>;
};

const About = () => {
  const { name } = useParams();
  return <h1>About page {name}</h1>;
};

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
