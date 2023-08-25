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
    name: "chopped",
    frontImage: "logo.png",
    backImage: "chopper.png",
  },
];

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const doubleAndShuffle = (array) => {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    const card = { ...array[i] };
    card.id = array.length + i;
    array.push(card);
  }
  shuffleArray(array);
};

const getCards = (n) => {
  const nCards = cards.slice(0, n);
  doubleAndShuffle(nCards);
  console.log(nCards)
  return nCards;
};

export { getCards };
