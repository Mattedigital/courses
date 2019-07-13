const randSelector = arr => {
  const randNum =  Math.floor(Math.random() * arr.length);
  return arr[randNum];
}

export {randSelector};
