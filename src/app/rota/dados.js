// const graph = {
//   "Florianópolis": {
//     "São José": {
//       car: { distance: 10, time: 15 },
//       bus: { distance: 10, time: 20 },
//       bike: { distance: 10, time: 40 },
//     },
//   },

//   "São José": {
//     "Florianópolis": {
//       car: { distance: 10, time: 15 },
//       bus: { distance: 12, time: 20 },
//       bike: { distance: 10, time: 40 },
//     },
//     "Palhoça": {
//       car: { distance: 9, time: 12 },
//       bus: { distance: 11, time: 15 },
//       bike: { distance: 10, time: 40 },
//     },
//   },

//   "Palhoça": {
//     "Florianópolis": {
//       car: { distance: 15, time: 20 },
//       bus: { distance: 18, time: 25 },
//       bike: { distance: 10, time: 40 },
//     },
//     "São José": {
//       car: { distance: 9, time: 12 },
//       bus: { distance: 11, time: 15 },
//       bike: { distance: 10, time: 40 },
//     },
//   },
// };

const graph = {
  "Florianópolis": {
    "São José": {
      car: { distance: 12, time: 18 },
      bus: { distance: 12, time: 54 },
      bike: { distance: 12, time: 16 },
    },
  },

  "São José": {
    "Florianópolis": {
      car: { distance: 12, time: 18 },
      bus: { distance: 12, time: 54 },
      bike: { distance: 12, time: 16 },
    },
    "Palhoça": {
      car: { distance: 9, time: 14 },
      bus: { distance: 9, time: 54 },
      bike: { distance: 9, time: 17 },
    },
    "São Pedro de Alcântara": {
      car: { distance: 26, time: 35 },
      bus: { distance: 26, time: 42 },
      bike: { distance: 26, time: 33 },
    },
    "Antônio Carlos": {
      car: { distance: 30, time: 35 },
      bus: { distance: 30, time: 120 },
      bike: { distance: 30, time: 30 },
    },
    "Biguaçu": {
      car: { distance: 13, time: 14 },
      bus: { distance: 13, time: 58 },
      bike: { distance: 13, time: 13 },
    },
  },

  "Palhoça": {
    "Paulo Lopes": {
      car: { distance: 40, time: 35 },
      bus: { distance: 40, time: 125 },
      bike: { distance: 40, time: 35 },
    },
    "Santo Amaro da Imperatriz": {
      car: { distance: 15, time: 24 },
      bus: { distance: 15, time: 49 },
      bike: { distance: 15, time: 20 },
    },
    "São Pedro de Alcântara": {
      car: { distance: 25, time: 35 },
      bus: { distance: 25, time: 44 },
      bike: { distance: 25, time: 32 },
    },
    "São José": {
      car: { distance: 10, time: 12 },
      bus: { distance: 10, time: 72 },
      bike: { distance: 10, time: 12 },
    },
  },

  "Paulo Lopes": {
    "Palhoça": {
      car: { distance: 41, time: 35 },
      bus: { distance: 41, time: 397 },
      bike: { distance: 41, time: 36 },
    },
    // "Santo Amaro da Imperatriz": {
    //   car: { distance: 49, time: 50 },
    //   bus: { distance: 49, time: 216 },
    //   bike: { distance: 49, time: 45 },
    // },
  },

  "São Bonifácio": {
    "Anitápolis": {
      car: { distance: 67, time: 90 },
      bus: { distance: 67, time: 104 },
      bike: { distance: 67, time: 88 },
    },
    "Águas Mornas": {
      car: { distance: 41, time: 50 },
      bus: { distance: 41, time: 60 },
      bike: { distance: 41, time: 46 },
    },
    "Santo Amaro da Imperatriz": {
      car: { distance: 48, time: 55 },
      bus: { distance: 48, time: 70 },
      bike: { distance: 48, time: 53 },
    },
    "Paulo Lopes": {
      car: { distance: 97, time: 100 },
      bus: { distance: 97, time: 115 },
      bike: { distance: 97, time: 101 },
    },
  },

  "Anitápolis": {
    "São Bonifácio": {
      car: { distance: 67, time: 90 },
      bus: { distance: 67, time: 104 },
      bike: { distance: 67, time: 88 },
    },
    "Águas Mornas": {
      car: { distance: 60, time: 65 },
      bus: { distance: 60, time: 80 },
      bike: { distance: 60, time: 70 },
    },
    "Rancho Queimado": {
      car: { distance: 36, time: 40 },
      bus: { distance: 36, time: 57 },
      bike: { distance: 36, time: 44 },
    },
    "Alfredo Wagner": {
      car: { distance: 81, time: 85 },
      bus: { distance: 81, time: 110 },
      bike: { distance: 81, time: 68 },
    },
  },

  "Alfredo Wagner": {
    "Leoberto Leal": {
      car: { distance: 35, time: 60 },
      bus: { distance: 35, time: 72 },
      bike: { distance: 35, time: 49 },
    },
    "Anitápolis": {
      car: { distance: 81, time: 85 },
      bus: { distance: 81, time: 110 },
      bike: { distance: 81, time: 68 },
    },
    "Rancho Queimado": {
      car: { distance: 46, time: 45 },
      bus: { distance: 46, time: 93 },
      bike: { distance: 46, time: 45 },
    },
  },

  "Leoberto Leal": {
    "Nova Trento": {
      car: { distance: 69, time: 130 },
      bus: { distance: 69, time: 153 },
      bike: { distance: 69, time: 125 },
    },
    "Major Gercino": {
      car: { distance: 52, time: 110 },
      bus: { distance: 52, time: 125 },
      bike: { distance: 52, time: 106 },
    },
    "Angelina": {
      car: { distance: 53, time: 120 },
      bus: { distance: 53, time: 143 },
      bike: { distance: 53, time: 84 },
    },
    "Rancho Queimado": {
      car: { distance: 49, time: 100 },
      bus: { distance: 49, time: 120 },
      bike: { distance: 49, time: 71 },
    },
    "Alfredo Wagner": {
      car: { distance: 35, time: 60 },
      bus: { distance: 35, time: 72 },
      bike: { distance: 35, time: 49 },
    },
  },

  "Nova Trento": {
    "Canelinha": {
      car: { distance: 18, time: 20 },
      bus: { distance: 18, time: 61 },
      bike: { distance: 18, time: 20 },
    },
    "São João Batista": {
      car: { distance: 10, time: 14 },
      bus: { distance: 10, time: 37 },
      bike: { distance: 10, time: 13 },
    },
    "Major Gercino": {
      car: { distance: 34, time: 40 },
      bus: { distance: 34, time: 51 },
      bike: { distance: 34, time: 39 },
    },
    "Leoberto Leal": {
      car: { distance: 69, time: 130 },
      bus: { distance: 69, time: 153 },
      bike: { distance: 69, time: 125 },
    },
  },

  "Canelinha": {
    "Tijucas": {
      car: { distance: 15, time: 18 },
      bus: { distance: 15, time: 406 },
      bike: { distance: 15, time: 17 },
    },
    "Biguaçu": {
      car: { distance: 43, time: 45 },
      bus: { distance: 43, time: 740 },
      bike: { distance: 43, time: 40 },
    },
    "São João Batista": {
      car: { distance: 10, time: 12 },
      bus: { distance: 10, time: 32 },
      bike: { distance: 10, time: 12 },
    },
    "Nova Trento": {
      car: { distance: 18, time: 20 },
      bus: { distance: 18, time: 61 },
      bike: { distance: 18, time: 20 },
    },
  },

  "Tijucas": {
    "Canelinha": {
      car: { distance: 15, time: 18 },
      bus: { distance: 15, time: 406 },
      bike: { distance: 15, time: 17 },
    },
    "Biguaçu": {
      car: { distance: 32, time: 30 },
      bus: { distance: 32, time: 157 },
      bike: { distance: 32, time: 30 },
    },
    "Governador Celso Ramos": {
      car: { distance: 32, time: 40 },
      bus: { distance: 32, time: 719 },
      bike: { distance: 32, time: 37 },
    },
  },

  "Governador Celso Ramos": {
    "Tijucas": {
      car: { distance: 32, time: 40 },
      bus: { distance: 32, time: 719 },
      bike: { distance: 32, time: 37 },
    },
    "Biguaçu": {
      car: { distance: 32, time: 30 },
      bus: { distance: 32, time: 157 },
      bike: { distance: 32, time: 30 },
    },
  },

  "Biguaçu": {
    "Governador Celso Ramos": {
      car: { distance: 32, time: 30 },
      bus: { distance: 32, time: 157 },
      bike: { distance: 32, time: 30 },
    },
    "Tijucas": {
      car: { distance: 32, time: 30 },
      bus: { distance: 32, time: 157 },
      bike: { distance: 32, time: 30 },
    },
    "Canelinha": {
      car: { distance: 43, time: 45 },
      bus: { distance: 43, time: 740 },
      bike: { distance: 43, time: 40 },
    },
    "São João Batista": {
      car: { distance: 60, time: 70 },
      bus: { distance: 60, time: 90 },
      bike: { distance: 60, time: 59 },
    },
    "Antônio Carlos": {
      car: { distance: 16, time: 22 },
      bus: { distance: 16, time: 53 },
      bike: { distance: 16, time: 20 },
    },
    "São José": {
      car: { distance: 13, time: 14 },
      bus: { distance: 13, time: 58 },
      bike: { distance: 13, time: 13 },
    },
  },

  "São João Batista": {
    "Canelinha": {
      car: { distance: 10, time: 12 },
      bus: { distance: 10, time: 38 },
      bike: { distance: 10, time: 11 },
    },
    "Nova Trento": {
      car: { distance: 15, time: 22 },
      bus: { distance: 15, time: 34 },
      bike: { distance: 15, time: 18 },
    },
    "Major Gercino": {
      car: { distance: 19, time: 20 },
      bus: { distance: 19, time: 32 },
      bike: { distance: 19, time: 18 },
    },
    "Biguaçu": {
      car: { distance: 60, time: 70 },
      bus: { distance: 60, time: 90 },
      bike: { distance: 60, time: 59 },
    },
    "Antônio Carlos": {
      car: { distance: 72, time: 85 },
      bus: { distance: 72, time: 100 },
      bike: { distance: 72, time: 61 },
    },
  },

  "Major Gercino": {
    "Nova Trento": {
      car: { distance: 35, time: 40 },
      bus: { distance: 35, time: 48 },
      bike: { distance: 35, time: 38 },
    },
    "São João Batista": {
      car: { distance: 15, time: 22 },
      bus: { distance: 15, time: 34 },
      bike: { distance: 15, time: 18 }
    },
    "Leoberto Leal": {
      car: { distance: 52, time: 110 },
      bus: { distance: 52, time: 122 },
      bike: { distance: 52, time: 103 },
    },
    "Angelina": {
      car: { distance: 28, time: 55 },
      bus: { distance: 28, time: 62 },
      bike: { distance: 28, time: 52 },
    },
    "Antônio Carlos": {
      car: { distance: 47, time: 90 },
      bus: { distance: 47, time: 110 },
      bike: { distance: 47, time: 86 },
    },
  },

  "Angelina": {
    "Major Gercino": {
      car: { distance: 28, time: 55 },
      bus: { distance: 28, time: 62 },
      bike: { distance: 28, time: 52 },
    },
    "São Pedro de Alcântara": {
      car: { distance: 28, time: 65 },
      bus: { distance: 28, time: 72 },
      bike: { distance: 28, time: 60 },
    },
    "Rancho Queimado": {
      car: { distance: 15, time: 22 },
      bus: { distance: 15, time: 28 },
      bike: { distance: 15, time: 19 },
    },
    "Leoberto Leal": {
      car: { distance: 89, time: 120 },
      bus: { distance: 89, time: 132 },
      bike: { distance: 89, time: 73 },
    },
    "Antônio Carlos": {
      car: { distance: 35, time: 70 },
      bus: { distance: 35, time: 78 },
      bike: { distance: 35, time: 66 },
    },
  },

  "Antônio Carlos": {
    "Biguaçu": {
      car: { distance: 16, time: 22 },
      bus: { distance: 16, time: 53 },
      bike: { distance: 16, time: 20 },
    },
    "São José": {
      car: { distance: 30, time: 40 },
      bus: { distance: 30, time: 108 },
      bike: { distance: 30, time: 33 },
    },
    "São Pedro de Alcântara": {
      car: { distance: 10, time: 20 },
      bus: { distance: 10, time: 38 },
      bike: { distance: 10, time: 18 },
    },
    "Angelina": {
      car: { distance: 35, time: 70 },
      bus: { distance: 35, time: 78 },
      bike: { distance: 35, time: 66 }
    },
    "Major Gercino": {
      car: { distance: 47, time: 90 },
      bus: { distance: 47, time: 110 },
      bike: { distance: 47, time: 86 },
    },
    "São João Batista": {
      car: { distance: 72, time: 85 },
      bus: { distance: 72, time: 100 },
      bike: { distance: 72, time: 61 },
    },
  },

  "São Pedro de Alcântara": {
    "Antônio Carlos": {
      car: { distance: 10, time: 20 },
      bus: { distance: 10, time: 38 },
      bike: { distance: 10, time: 18 },
    },
    "São José": {
      car: { distance: 25, time: 40 },
      bus: { distance: 25, time: 58 },
      bike: { distance: 25, time: 31 },
    },
    "Santo Amaro da Imperatriz": {
      car: { distance: 18, time: 28 },
      bus: { distance: 18, time: 36 },
      bike: { distance: 18, time: 25 },
    },
    "Angelina": {
      car: { distance: 28, time: 65 },
      bus: { distance: 28, time: 72 },
      bike: { distance: 28, time: 60 },
    },
    "Águas Mornas": {
      car: { distance: 23, time: 35 },
      bus: { distance: 23, time: 43 },
      bike: { distance: 23, time: 29 },
    },
    "Antônio Carlos": {
      car: { distance: 10, time: 20 },
      bus: { distance: 10, time: 38 },
      bike: { distance: 10, time: 18 },
    },
  },


  "Santo Amaro da Imperatriz": {
    "São Pedro de Alcântara": {
      car: { distance: 18, time: 28 },
      bus: { distance: 18, time: 36 },
      bike: { distance: 18, time: 25 },
    },
    "Palhoça": {
      car: { distance: 17, time: 28 },
      bus: { distance: 17, time: 22 },
      bike: { distance: 17, time: 62 },
    },
    // "Paulo Lopes": {
    //   car: { distance: 15, time: 24 },
    //   bus: { distance: 15, time: 49 },
    //   bike: { distance: 15, time: 20 },
    // },
    "São Bonifácio": {
      car: { distance: 48, time: 55 },
      bus: { distance: 48, time: 70 },
      bike: { distance: 48, time: 53 },
    },
    "Águas Mornas": {
      car: { distance: 6, time: 10 },
      bus: { distance: 6, time: 9 },
      bike: { distance: 6, time: 16 },
    },
  },

  "Águas Mornas": {
    "São Pedro de Alcântara": {
      car: { distance: 23, time: 35 },
      bus: { distance: 23, time: 43 },
      bike: { distance: 23, time: 29 },
    },
    "Santo Amaro da Imperatriz": {
      car: { distance: 0, time: 0 },
      bus: { distance: 0, time: 0 },
      bike: { distance: 0, time: 0 },
    },
    "Anitápolis": {
      car: { distance: 60, time: 65 },
      bus: { distance: 60, time: 80 },
      bike: { distance: 60, time: 70 },
    },
    "São Bonifácio": {
      car: { distance: 41, time: 50 },
      bus: { distance: 41, time: 60 },
      bike: { distance: 41, time: 46 },
    },
    "Rancho Queimado": {
      car: { distance: 26, time: 30 },
      bus: { distance: 26, time: 46 },
      bike: { distance: 26, time: 29 }
    },
  },

  "Rancho Queimado": {
    "Alfredo Wagner": {
      car: { distance: 46, time: 45 },
      bus: { distance: 46, time: 93 },
      bike: { distance: 46, time: 45 },
    },
    "Leoberto Leal": {
      car: { distance: 49, time: 100 },
      bus: { distance: 49, time: 120 },
      bike: { distance: 49, time: 71 },
    },
    "Angelina": {
      car: { distance: 15, time: 22 },
      bus: { distance: 15, time: 28 },
      bike: { distance: 15, time: 19 },
    },
    "Águas Mornas": {
      car: { distance: 26, time: 30 },
      bus: { distance: 26, time: 46 },
      bike: { distance: 26, time: 29 },
    },
    "Anitápolis": {
      car: { distance: 36, time: 40 },
      bus: { distance: 36, time: 57 },
      bike: { distance: 36, time: 44 },
    },
  },
};



export default graph;
