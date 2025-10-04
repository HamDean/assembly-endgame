export const languagesBlocksInfo = [
    { language: 'HTML', textColor: 'white', bgColor: '#E2680F'},
    { language: 'CSS', textColor: 'white', bgColor: '#328AF1'},
    { language: 'Javascript', textColor: 'black', bgColor: '#F4EB13'},
    { language: 'React', textColor: 'black', bgColor: '#2ED3E9'},
    { language: 'Typescript', textColor: 'white', bgColor: '#298EC6'},
    { language: 'Node.js', textColor: 'white', bgColor: '#599137'},
    { language: 'Python', textColor: 'black', bgColor: '#FFD742'},
    { language: 'Ruby', textColor: 'white', bgColor: '#D02B2B'},
    { language: 'Assembly', textColor: 'white', bgColor: '#2D519F'},
]

const words = [
  "apple","stone","chair","green","plant","water","light","earth","music","table",
  "sweet","house","dream","cloud","smile","heart","river","bread","field","storm",
  "grape","flame","shine","woods","track","ocean","plain","roads","grass","world",
  "paint","knife","sword","fruit","pearl","candy","glass","wheat","flock","mount",
  "sheep","charm","brick","tower","flute","crown","beach","shore","dance","story",
  "lover","noble","giant","magic","frost","steel","flask","crane","flock","quiet",
  "cabin","flame","dream","spark","bliss","truth","stone","ghost","angel","storm",
  "blood","grave","tiger","piano","queen","zebra","raven","camel","panda","eagle",
  "whale","shark","otter","koala","sloth","moose","horse","sheep","goose","lynx",
  "deer","wolf","lion","orca","frog","crow","hawk","duck","moth","bear"
];


function getRandomWord(){
  return words[Math.ceil(Math.random() * words.length)]
}

export const word = getRandomWord()

export const alphabet = [
  "A","B","C","D","E","F","G",
  "H","I","J","K","L","M","N",
  "O","P","Q","R","S","T","U",
  "V","W","X","Y","Z"
];
