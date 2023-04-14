/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
// eslint-disable-next-line linebreak-style
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
const characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'маг', health: 0},
    {name: 'лучник', health: 0},
  ];
  
  const alive = characters.filter(item => item.health > 0);