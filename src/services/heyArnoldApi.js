export const fetchHeyArnoldCharacters = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters');

  return res.json();
};
