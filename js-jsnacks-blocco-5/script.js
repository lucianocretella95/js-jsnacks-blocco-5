const zucchine = [
  {
    peso: 3,
    lunghezza: 4,
  },

  {
    peso: 6,
    lunghezza: 8,
  },

  {
    peso: 9,
    lunghezza: 12,
  },
  {
    peso: 12,
    lunghezza: 16,
  },
  {
    peso: 15,
    lunghezza: 20,
  },
  {
    peso: 18,
    lunghezza: 24,
  },
  {
    peso: 21,
    lunghezza: 28,
  },
];

// let somma = 0;

// for (let i = 0; i < zucchine.length; i++) {
//   let pesozucchina = zucchine[i].peso;
//   somma = somma + pesozucchina;
// }
// console.log("il peso totale è", somma);
let sotto15 = 0;
let sopra15 = 0;

for (let i = 0; i < zucchine.length; i++) {
  const element = zucchine[i];
  if (zucchine[i].lunghezza < 15) {
    console.log(`${element.lunghezza} minore < 15`);
    sotto15 = element.lunghezza + sotto15;
  } else {
    console.log(`${element.lunghezza} maggiore > 15`);
    sopra15 = sopra15 + element.lunghezza;
  }
}
console.log("somma di < 15", sotto15);
console.log("somma di > 15", sopra15);

// for (let i = 0; i < zucchine.length; i++) {
//   let lunghezzazucchine = zucchine[i].lunghezza < 15;
//   sotto15 = sotto15 + lunghezzazucchine;
//   console.log(lunghezzazucchine);
// }

// for (let i = 0; i < zucchine.length; i++) {
//   let lunghezzazucchine = zucchine[i].lunghezza > 15;
//   sopra15 = sopra15 + lunghezzazucchine;
//   console.log(lunghezzazucchine);
// }
