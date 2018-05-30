const firstNames = ['Brett','Aaron','Giancarlo','Gary','Tyler','Miguel','Neil','Gleybor','Greg','Austin','Ronald','Luis','Masahiro','CC','Sonny','Chad','David','Dellin','Aroldis']

const lastNames = ['Gardner','Judge','Hicks','Stanton','Sanchez','Austin','Andujar','Walker','Torres','Bird','Romine','Torreyes','Severino','Tanaka','Sabathia','Gray','Green','Robertson','Betances','Chapman']

const rand = (max, min = 1) => Math.floor(Math.random() * (max - min + 1) + min)

const generateName = () => `${firstNames[rand(firstNames.length-1)]} ${lastNames[rand(lastNames.length-1)]}`

const createPlayer = () => ({
  name: generateName(),
  group: rand(99) % 3 ? (rand(99) % 2 ? 'Infielders' : 'Outfielders') : 'Pitchers',
})

const assignNumber = (arr, obj) => {
  let numIsUnique = false;

  while (!numIsUnique) {
    obj.number = rand(99)

    if (arr.filter(player => player.number === obj.number).length === 0) {
      numIsUnique = true;
    }
  }

  arr.push(obj)

  return arr
}

const sortNumber = (player1, player2) => player1.number < player2.number
const sortGroup = (player1, player2) => player1.group > player2.group

export default Array.from({length: 40}, createPlayer).reduce(assignNumber, []).sort(sortNumber).sort(sortGroup)