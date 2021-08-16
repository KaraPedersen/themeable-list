import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { CharacterProvider } from '../../state/CharacterProvider';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<CharacterProvider><App /> </CharacterProvider>);
    expect(asFragment()).toMatchSnapshot();
  });
});
