const zergCards = [
  {
    name: 'Zergling',
    Gdmg: 10,
    Admg: 0,
    life: 70,
    ability: 'Atacante: gana 4.1 de daño terrestre.',
    abilities: [],
    race: 'Zerg',
    cost: 50,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Roach',
    Gdmg: 11.2,
    Admg: 0,
    life: 145,
    ability: 'Defensor: gana 14.5 de vida.',
    abilities: [],
    race: 'Zerg',
    cost: 125,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Queen',
    Gdmg: 11.3,
    Admg: 12.7,
    life: 150,
    ability: 'Atacante: gana 75 de vida. Defensor: repara 75 la base.',
    abilities: [],
    race: 'Zerg',
    cost: 150,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Hydralisk',
    Gdmg: 22.2,
    Admg: 22.2,
    life: 90,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Zerg',
    cost: 200,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Ravager',
    Gdmg: 14,
    Admg: 0,
    life: 120,
    ability:
      'Atacante: daña 60 la base enemiga. Defensor: gana 10 de daño terrestre.',
    abilities: [],
    race: 'Zerg',
    cost: 300,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Baneling',
    Gdmg: 0,
    Admg: 0,
    life: 0,
    ability:
      'Atacante: gana 40 de daño terrestre. Defensor: gana 80 de daño terrestre.',
    abilities: [],
    race: 'Zerg',
    cost: 100,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Lurker',
    Gdmg: 14,
    Admg: 0,
    life: 200,
    ability:
      'Siempre: invisible. Atacante: daña 14 la base enemiga. Defensor: Gana 14 de daño terrestre.',
    abilities: [],
    race: 'Zerg',
    cost: 450,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Defiler',
    Gdmg: 0,
    Admg: 0,
    life: 80,
    ability:
      'Siempre: daña 40 a los enemigos terrestres y aéreos. Atacante: daña 4 la base enemiga.',
    abilities: [],
    race: 'Zerg',
    cost: 350,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Infestor',
    Gdmg: 0,
    Admg: 0,
    life: 90,
    ability: 'Siempre: controla un enemigo aleatorio.',
    abilities: [],
    race: 'Zerg',
    cost: 400,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Swarm Host',
    Gdmg: 46.6,
    Admg: 0,
    life: 160,
    ability: 'Siempre: invisible',
    abilities: [],
    race: 'Zerg',
    cost: 250,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Ultralisk',
    Gdmg: 57.4,
    Admg: 0,
    life: 500,
    ability:
      'Atacante: gana 4.6 de daño terrestre. Defensor: gana 250 de vida.',
    abilities: [],
    race: 'Zerg',
    cost: 700,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Overlord',
    Gdmg: 0,
    Admg: 0,
    life: 200,
    ability: 'Siempre: detector',
    abilities: [],
    race: 'Zerg',
    cost: 100,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Scourge',
    Gdmg: 0,
    Admg: 220,
    life: 0,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Zerg',
    cost: 175,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Mutalisk',
    Gdmg: 8.3,
    Admg: 8.3,
    life: 120,
    ability:
      'Atacante: gana 11.3 de daño terrestre. Defensor: gana 40 de vida.',
    abilities: [],
    race: 'Zerg',
    cost: 300,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Corruptor',
    Gdmg: 0,
    Admg: 10.3,
    life: 200,
    ability: '',
    abilities: [],
    race: 'Zerg',
    cost: 350,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Viper',
    Gdmg: 0,
    Admg: 0,
    life: 150,
    ability:
      'Atacante: daña 35 la base enemiga. Defensor: disminuye el ataque aéreo enemigo un 10%',
    abilities: [],
    race: 'Zerg',
    cost: 500,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Brood Lord',
    Gdmg: 31.1,
    Admg: 0,
    life: 300,
    ability: 'Atacante: gana 8.7 de daño terrestre. Defensor: gana 60 de vida.',
    abilities: [],
    race: 'Zerg',
    cost: 800,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Kerrigan',
    Gdmg: 75,
    Admg: 75,
    life: 1000,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Zerg',
    cost: 1500,
    movement: 'ground',
    image: ''
  }
]

const terranCards = [
  {
    name: 'Marine',
    Gdmg: 9.8,
    Admg: 9.8,
    life: 45,
    ability:
      'Atacante: gana 5.2 de daño terrestre y aéreo, y pierde 10 de vida.',
    abilities: [],
    race: 'Terran',
    cost: 50,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Marauder',
    Gdmg: 9.3,
    Admg: 0,
    life: 125,
    ability:
      'Atacante: gana 4.8 de daño terrestre y aéreo, y pierde 20 de vida.',
    abilities: [],
    race: 'Terran',
    cost: 150,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Ghost',
    Gdmg: 9.3,
    Admg: 9.3,
    life: 100,
    ability:
      'Atacante: invisible. Defensor: gana 80 de daño terrestre y aéreo.',
    abilities: [],
    race: 'Terran',
    cost: 400,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Reaper',
    Gdmg: 10.1,
    Admg: 0,
    life: 60,
    ability: 'Atacante: gana 75 de vida. Defensor: repara 75 la base.',
    abilities: [],
    race: 'Terran',
    cost: 150,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Hellion',
    Gdmg: 4.5,
    Admg: 0,
    life: 90,
    ability:
      'Atacante: gana 3.4 de daño terrestre. Defensor: gana 6 de daño terrestre.',
    abilities: [],
    race: 'Terran',
    cost: 100,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Vulture',
    Gdmg: 20,
    Admg: 0,
    life: 80,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Terran',
    cost: 75,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Widow Mine',
    Gdmg: 5.7,
    Admg: 5.7,
    life: 75,
    ability: 'Defensor: invisible.',
    abilities: [],
    race: 'Terran',
    cost: 125,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Goliath',
    Gdmg: 12,
    Admg: 20,
    life: 125,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Terran',
    cost: 200,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Siege Tank',
    Gdmg: 30,
    Admg: 0,
    life: 175,
    ability: 'Atacante: daña 30 la base enemiga.',
    abilities: [],
    race: 'Terran',
    cost: 400,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Thor',
    Gdmg: 65.9,
    Admg: 11.2,
    life: 400,
    ability:
      'Atacante: gana 4.1 de daño terrestre. Defensor: gana 30 de daño aéreo.',
    abilities: [],
    race: 'Terran',
    cost: 700,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Medivac',
    Gdmg: 0,
    Admg: 0,
    life: 150,
    ability: 'Siempre: gana 100 de vida terrestre.',
    abilities: [],
    race: 'Terran',
    cost: 300,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Viking',
    Gdmg: 16.9,
    Admg: 14,
    life: 125,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Terran',
    cost: 300,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Wraith',
    Gdmg: 8,
    Admg: 20,
    life: 120,
    ability: 'Atacante: invisible.',
    abilities: [],
    race: 'Terran',
    cost: 350,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Banshee',
    Gdmg: 27,
    Admg: 0,
    life: 140,
    ability: 'Atacante: daña 10 la base enemiga. Defensor: invisible.',
    abilities: [],
    race: 'Terran',
    cost: 350,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Raven',
    Gdmg: 31.6,
    Admg: 31.6,
    life: 140,
    ability: 'Siempre: detector.',
    abilities: [],
    race: 'Terran',
    cost: 500,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Liberator',
    Gdmg: 0,
    Admg: 7.8,
    life: 180,
    ability: 'Defensor: gana 65.8 de daño terrestre.',
    abilities: [],
    race: 'Terran',
    cost: 450,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Battlecruiser',
    Gdmg: 50,
    Admg: 31.3,
    life: 550,
    ability: 'Atacante: daña 240 la base enemiga.',
    abilities: [],
    race: 'Terran',
    cost: 1000,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Raynor',
    Gdmg: 75,
    Admg: 75,
    life: 1000,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Terran',
    cost: 1500,
    movement: 'ground',
    image: ''
  }
]

const protossCards = [
  {
    name: 'Zealot',
    Gdmg: 18.6,
    Admg: 0,
    life: 150,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Protoss',
    cost: 100,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Sentry',
    Gdmg: 8.5,
    Admg: 8.5,
    life: 80,
    ability: 'Defensor: aumenta 45 de vida.',
    abilities: [],
    race: 'Protoss',
    cost: 250,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Stalker',
    Gdmg: 9.7,
    Admg: 9.7,
    life: 125,
    ability: 'Atacante: daña 9.7 la base enemiga. Defensor: gana 20 de vida.',
    abilities: [],
    race: 'Protoss',
    cost: 225,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Dragoon',
    Gdmg: 12,
    Admg: 12,
    life: 180,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Protoss',
    cost: 225,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Dark Templar',
    Gdmg: 37.2,
    Admg: 0,
    life: 120,
    ability: 'Atacante: invisible.',
    abilities: [],
    race: 'Protoss',
    cost: 375,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Archon',
    Gdmg: 20,
    Admg: 20,
    life: 360,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Protoss',
    cost: 350,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Immortal',
    Gdmg: 19.2,
    Admg: 0,
    life: 300,
    ability: 'Defensor: gana 200 de vida.',
    abilities: [],
    race: 'Protoss',
    cost: 475,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Disruptor',
    Gdmg: 0,
    Admg: 0,
    life: 250,
    ability:
      'Atacante: daña 80 a los enemigos terrestres. Defensor: daña 145 a los enemigos terrestres',
    abilities: [],
    race: 'Protoss',
    cost: 450,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Reaver',
    Gdmg: 25,
    Admg: 0,
    life: 180,
    ability: 'Atacante: daña 50 a la base enemiga.',
    abilities: [],
    race: 'Protoss',
    cost: 400,
    movement: 'ground',
    image: ''
  },
  {
    name: 'Colossus',
    Gdmg: 28,
    Admg: 0,
    life: 350,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Protoss',
    cost: 700,
    movement: 'all',
    image: ''
  },
  {
    name: 'Observer',
    Gdmg: 0,
    Admg: 0,
    life: 60,
    ability: 'Siempre: detector, invisible.',
    abilities: [],
    race: 'Protoss',
    cost: 175,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Corsair',
    Gdmg: 0,
    Admg: 12.6,
    life: 180,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Protoss',
    cost: 350,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Arbiter',
    Gdmg: 10,
    Admg: 10,
    life: 350,
    ability: 'Siempre: reduce 15% el daño enemigo.',
    abilities: [],
    race: 'Protoss',
    cost: 800,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Void Ray',
    Gdmg: 16.8,
    Admg: 16.8,
    life: 250,
    ability: 'Atacante: daña 12.8 la base enemiga.',
    abilities: [],
    race: 'Protoss',
    cost: 550,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Tempest',
    Gdmg: 17,
    Admg: 12.7,
    life: 300,
    ability: 'Atacante: gana 22 de daño terrestre y aéreo.',
    abilities: [],
    race: 'Protoss',
    cost: 600,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Carrier',
    Gdmg: 37.3,
    Admg: 37.3,
    life: 450,
    ability: 'Atacante: gana 640 de vida.',
    abilities: [],
    race: 'Protoss',
    cost: 970,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Mothership',
    Gdmg: 22.8,
    Admg: 22.8,
    life: 700,
    ability: 'Siempre: 10 unidades aleatorias son invisibles.',
    abilities: [],
    race: 'Protoss',
    cost: 1200,
    movement: 'flying',
    image: ''
  },
  {
    name: 'Zeratul',
    Gdmg: 75,
    Admg: 75,
    life: 1000,
    ability: 'Sin habilidad.',
    abilities: [],
    race: 'Protoss',
    cost: 1500,
    movement: 'ground',
    image: ''
  }
]

module.exports = { zergCards, terranCards, protossCards }
