import React from 'react';
import { Router, Switch, useParams } from '../../state/RouterProvider';
import CharacterList from '../characters/CharacterList';
import CharacterToggle from '../characters/CharacterToggle';

const Home = () => {
  return <h1>Home page</h1>;
};

const About = () => {
  const { name } = useParams();
  return <h1>About page {name}</h1>;
};

export default function App() {
  return (
    <>
      <CharacterToggle />
      <CharacterList />
    </>
  );
}
