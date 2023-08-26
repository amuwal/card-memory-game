const cards = [
  {
    id: 1,
    name: "Sanji",
    frontImage: "logo.png",
    backImage: "sanji.png",
  },
  {
    id: 2,
    name: "Robin",
    frontImage: "logo.png",
    backImage: "robin.png",
  },
  {
    id: 3,
    name: "Ace",
    frontImage: "logo.png",
    backImage: "ace.png",
  },
  {
    id: 4,
    name: "Zoro",
    frontImage: "logo.png",
    backImage: "zoro.png",
  },
  {
    id: 5,
    name: "luffy",
    frontImage: "logo.png",
    backImage: "luffy.png",
  },
  {
    id: 6,
    name: "brook",
    frontImage: "logo.png",
    backImage: "brook.png",
  },
  {
    id: 7,
    name: "mihawk",
    frontImage: "logo.png",
    backImage: "mihawk.png",
  },
  {
    id: 8,
    name: "chopper",
    frontImage: "logo.png",
    backImage: "chopper.png",
  },
  {
    id: 9,
    name: "nami",
    frontImage: "logo.png",
    backImage: "nami.png",
  },
  {
    id: 10,
    name: "crocodile",
    frontImage: "logo.png",
    backImage: "crocodile.png",
  },
  {
    id: 11,
    name: "smoker",
    frontImage: "logo.png",
    backImage: "smoker.png",
  },
  {
    id: 12,
    name: "akainu",
    frontImage: "logo.png",
    backImage: "akainu.png",
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const doubleAndShuffle = (array) => {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    const cur = { ...array[i], id: array[i].id + n };
    array.push(cur);
  }
  shuffleArray(array);
};

const getCards = (n) => {
  const nCards = cards.slice(0, n);
  doubleAndShuffle(nCards);
  console.log(nCards);
  return nCards;
};

export { getCards };
