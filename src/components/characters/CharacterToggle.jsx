import React from 'react';
import {
  useAvailableAPIs, 
  useSetSelectedApi,
} from '../../state/CharacterProvider';

const CharacterToggle = () => {
  const availableAPIs = useAvailableAPIs();
  const setSelectedApi = useSetSelectedApi();

  const handleChange = ({ target }) => setSelectedApi(target.value);

  return  (
    <ul>
      {availableAPIs.map((api) => (
        <li key={api}>
          <label>{api}</label>
          <input type="radio" name="api" value={api} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );
};

export default CharacterToggle;

